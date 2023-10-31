---
layout: post
title: Ubuntu 20.04 LTS NIST 800-171 Configuration
date: 2023-10-27 15:40 +0000
categories: linux security
tags:  ubuntu nist 
image:
    path: /assets/img/headers/nist-header.webp
---

# NIST 800-171
NIST Special Publication 800-171, titled "Protecting Controlled Unclassified Information in Non-Federal Systems and Organizations," is a document published by the National Institute of Standards and Technology (NIST), aimed at standardizing the way non-federal entities protect sensitive but unclassified information. 

The publication outlines 14 families of security requirements that aim to secure Controlled Unclassified Information (CUI) when it is stored, processed, or transmitted by non-federal systems and organizations.

## 14 Families of Security Requirements
- Access Control
    - Restricting access to CUI through the enforcement of access permissions.
- Awareness and Training
    - Ensuring that organizational personnel are adequately trained and aware of security risks.
- Audit and Accountability 
    - Creating and retaining system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity.
- Configuration Management
    - Establishing and maintaining the integrity of organizational systems by applying security configurations and monitoring changes.
- Identification and Authentication
    - Ensuring the identity of users and processes that access organizational systems.
- Incident Response
    - Establishing an operational incident handling capability for organizational systems.
- Maintenance
    - Performing timely maintenance of organizational systems.
- Media Protection
    - Protecting system media containing CUI, both paper and digital.
- Physical Protection
    - Limiting physical access to organizational systems and the facilities in which they are housed.
- Personnel Security
    - Ensuring that individuals occupying positions of responsibility within organizations are trustworthy and meet established security criteria.
- Risk Assessment 
    - Conducting assessments of risks to organizational operations, assets, and individuals.
- Security Assessment
    - Assessing the security controls in organizational systems to determine their effectiveness.
- System and Communications Protection
    - Monitoring, controlling, and protecting organizational communications at the external boundaries and key internal boundaries of information systems.
- System and Information Integrity
    - Identifying, reporting, and correcting information and information system flaws in a timely manner.

## Overview of the Build Steps
1. Install fresh Ubuntu 20.04 LTS system
2. Preconfigure the system for compliance
3. Run SCAP agent against OS
4. Collect results to compare and define steps needed for compliance
5. Run SCAP for verification
6. Fix the non-compliant issues
7. Repeat steps 3 through 6 as needed

## Fresh Ubuntu 20.04 LTS Installation
