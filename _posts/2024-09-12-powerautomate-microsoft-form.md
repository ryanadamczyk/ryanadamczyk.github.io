---
layout: post
title: How to use Microsoft Power Automate to create conditional Microsoft Forms
date: 2024-09-12 12:00 +0000
description: "Learn how to use Power Automate to create conditional Microsoft Forms with limited slot capacities."
categories: ["Automation", "Microsoft"]
tags: ["power-automate", "microsoft-forms", "sharepoint", "automation"]
---

# Power Automate & Microsoft Forms
Power Automate can be a very powerful tool when the situation is appropriate.  

I recently found myself needing to create a Microsoft form that collects as follows:  
- Ask for users Full Name
- Prompt user to select one time slot out of 8 provided options

The catch in my scenario however, is that for 4 of the time slots I wanted to ensure only 7 people could sign up. In the other 4 time slots I wanted to ensure only 14 people could sign up.  

You would assume this might already be a feature in Microsoft Forms, however you would be sadly mistaken. I discovered that the only way to achieve this is by utilizing Power Automate.

## Goal of the Power Automate Flow
Once I discovered I would have to be using Power Automate I decided I wanted to learn as much as possible and add lots of functionality to the form.  
Therefore my goals for the flow were as follows:
- Gather the users email and full name
- Gather the users preferred time slot
- Ensure that all time slots would not exceed the maximum capacity
- Send a meeting invite to the user for their desired time as confirmation
- Send an email to the user if their desired time was full

## Beginning Requirements
In order for this flow to function properly you will first need to set up a couple things.  

First you must create the desired Microsoft Form, for my case I created a form and added a question for Full Name and a question asking to select one of 8 time slots.  

Next you must create a list inside SharePoint, this will act as the storing grounds for your forms data instead of the forms 'Responses' section.  
This list is necessary in order for the flow to properly evaluate whether a time slot is at capacity or not.  
This list must contain matching columns to the form, so columns should look as following:
- Full Name
- Time Slot
    - Ensure that you added matching time slot sections within this column
- Response Count

## Flow Structure
Now by no means is this flow likely the most efficient way to do this task, however this was how I got it to work for my functionality. In the future I will look to discover ways to optimize my flow for efficiency.  

With that being said, here is the flows structures as well as details for each flow action:  
1. When a new response is submitted
    - This is the first action in the flow and is what prompts the flow to start
    - Link this action to your desired Microsoft Form
2. Get response details
    - This action retrieves all the submitted data from the form and brings it into the flow
3. Initialize Variable
    - Name: TimeSlotCount
    - Type: Integer
    - Value: 0
4. Initialize Variable 1
    - Name: SelectedTimeSlot
    - Type: String
    - Value: Use the dynamic content from the Microsoft form: 'Time Slot'
5. Initialize Variable 2
    - Name: MaxCount
    - Type: Integer
    - Value: 0
6. Initialize Variable 3
    - Name: StartTime
    - Type: String
    - Value: Blank
7. Initialize Variable 4
    - Name: EndTime
    - Type: String
    - Value: Blank
8. Compose SelectedTimeSlot
    - Inputs: SelectedTimeSlot Variable
9. Compose SplitTimeSlot
    - Inputs: split(variables('SelectedTimeSlot'), ' - ')
    - This compose action breaks apart the SelectedTimeSlot data for reformatting
10. Compose StartTime
    - Inputs: first(outputs('SplitTimeSlot'))
    - This compose action takes the start time of the provided split time slot
11. Compose EndTime
    - Inputs: last(outputs('SplitTimeSlot'))
    - This compose action takes the end time of the provided split time slot
12. Compose Formatted StartTime
    - Inputs: concat('2024-09-19T', formatDateTime(outputs('Compose_StartTime'), 'HH:mm:ss'))
    - This compose action formats the StartTime variable to be useable in creating a meeting invite properly
13. Compose Formatted EndTime
    - Inputs: concat('2024-09-19T', formatDateTime(outputs('Compose_EndTime'), 'HH:mm:ss'))
    - This compose action formats the EndTime variable to be usable in creating a meeting invite properly
14. Set StartTime
    - Name: StartTime
    - Value: Use the dynamic output of the Formatted StartTime compose action
15. Set EndTime
    - Name: EndTime
    - Value: Use the dynamic output of the Formatted EndTime compose action
16. Condition 1
    - OR:
        - Variable SelectedTimeSlot is equal to '00:00 AM - 00:00 AM'
        - Variable SelectedTimeSlot is equal to '00:00 AM - 00:00 AM'
        - Variable SelectedTimeSlot is equal to '00:00 AM - 00:00 AM'
        - Variable SelectedTimeSlot is equal to '00:00 AM - 00:00 AM'
    - For True add:
        - Set Variable
            - Name: MaxCount
            - Value: 14
    - For False add:
        - Set Variable
            - Name: MaxCount
            - Value: 7
    - This condition evaluates whether the selected time slot should have a 7 or 14 person capacity
17. Get Items
    - Site Address: Use the link to your personal SharePoint
    - List Name: Select the list you created earlier in SharePoint
    - Top Count: 300
        - This is set to optimize the flow
18. Apply to each
    - Select An Output From Previous Steps: Select the dynamic content 'body/value' from the SharePoint
    - Inside the Apply to Each loop add the following:
        - Compose
            - Inputs: Select the dynamic content 'TimeSlot.Value' from the SharePoint
        - Compose 1
            - Inputs: SelectedTimeSlot Variable
        - Condition
            - AND:
                - Compose is equal to Compose 1
            - For True add:
                - Increment Variable
                    - Name: TimeSlotCount
                    - Value: 1
            - For False add nothing
19. Condition 1
    - AND:
        - TimeSlotCount is less then MaxCount
    - For True add:
        - Get Items 1
            - Site Address: Use the link to your personal SharePoint
            - List Name: Select the list you created earlier in SharePoint
            - Filter Query: TimeSlot eq 'SelectedTimeSlot'
        - Apply to Each 1
            - Select An Output From Previous Steps: Select the dynamic content 'body/value' from the SharePoint
            - Update Item
                - Site Address: Use the link to your personal SharePoint
                - List Name: Select the list you created earlier in SharePoint
                - ID: Select the dynamic content 'ID' from the SharePoint
                - Response Count: add(items('Apply_to_Each1')?['ResponseCount'], 1)
        - Create Item
            - Site Address: Use the link to your personal SharePoint
            - List Name: Select the list you created earlier in SharePoint
            - Title: Use the dynamic content 'Full Name' from the Microsoft Form
            - Time Slot Value: Use the SelectedTimeSlot variable
            - Response Count: add(variables('TimeSlotCount'),1)
        - Create Event (V4)
            - Calendar ID: Calendar
            - Subject: ______ Confirmation
            - Start Time: Use the StartTime variable
            - End Time: Use the EndTime variable
            - Time Zone: Use your local time zone
            - Required Attendees: Use the dynamic content 'Responder's Email' from the form
            - Body: Write your desired event message
            - Location: Add your desired location
            - Show As: busy
    - For False add:
        - Send me an email notification
            - Subject: _____ Time Slot Full
            - Body: Sadly the time slot you selected 'SelectedTimeSlot' is already full, please select a different time slot

## Flow Completion
You should now have a functional flow that triggers upon form submission, verifies the response against SharePoint list data, inserts the data into the SharePoint list, and sends a confirmation to the user.   

Here is a rough screenshot of what the ending flow should look like:  

![pa_flow](/assets/img/posts/pa_flow.webp)

## Closing Remarks
This is just one example of how you can utilize Power Automate with Microsoft Forms.  

If you’re not collecting time slot data from users, you can adjust the variables accordingly, but the core logic and flow will remain consistent.