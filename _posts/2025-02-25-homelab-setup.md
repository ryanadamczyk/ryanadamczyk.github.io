---
layout: post
title: A glance into my HomeLab
date: 2025-02-25 12:00 +0000
---

# Why HomeLab?
During my time at Florida Atlantic University, I had the chance to gain hands-on experience in a hypervisor environment. Although my permissions and scope were limited, I was captivated from the start. To safely explore and learn about hypervisors, virtual machines, Linux, networking, and more, I decided to set up my own HomeLab.  

## Hardware and Software
To start my HomeLab I picked up a 12th generation Intel NUC (NUC12WSKi7) on eBay barebones for $535.   
On the NUC I decided to run Proxmox VE 8.3.3.  
Inside the NUC I have:  

    16 Core i7-1260P CPU
    64 GB RAM
    2 TB SSD (Data Volume)
    512 GB SSD (Proxmox)

I decided to pick up a Raspberry Pi 4 Model B from CanaKit for $134.  
On the Pi I decided to run VMWare vSphere 8.  
Inside the Raspberry Pi 4 is:  

    4 core ARMv8 CPU
    8 GB RAM
    64 GB MicroSD (vSphere)
    128 GB Flash Drive (Data Volume)

## Initial Goals
Some of my initial goals, beyond learning to navigate and manage a hypervisor environment, included:

- Learning Linux
- Working exclusively with the CLI to become more familiar with Bash
- Learning Docker
- Learning Docker Compose and how to write .YML files
- Setting up home game servers for my friends and me to play on

I have successfully achieved many of these goals and have now shifted my focus to learning Kubernetes and Ansible. I aim to automate my entire HomeLab with playbooks and potentially achieve high availability capabilities if I add more nodes in the future.

## Virtual Machines and their use cases
After setting up my initial Proxmox node and data volumes I spun up the following containers and created the following VM's:
- pihole (LXC)
- homarr (LXC)
- nginxproxymanager (LXC)
- tailscale (LXC)
- game-server (VM)
-arr (Media Server VM)

### PiHole
The first thing I did after setting up Proxmox was create a PiHole LXC container directly within Proxmox.  

This was important to set up first, as I planned on using PiHole as my HomeLabs DNS server to both block adds and allow for setting up a reverse proxy with NGINX.

### Homarr
I went with Homarr as my dashboard of choice.

I found it provided the best mix of simplicity and functionality for my use case thus far. The integration with services like Proxmox is a plus.

### NGINX Proxy Manger
I have previously used Traefik as my reverse proxy, however I found myself recently switching to NGINX for it's simplicity.

I spin up new services for testing quite often, and I found nginx's web UI super useful in comparison to Traefiks configuration for my setup.


### Tailscale
I chose to run Tailscale in an LXC container. This container acts as the hub for all of my Tailscale network.

I have this node configured to advertise subnet and act as an exit node. This allows me to remotely utilize any of my services as long as I am connected to my Tailscale network.

### arr (Media Server)
For my home media server I decided to spin up a VM running docker.

I chose to run a custom setup of geekau's media stack found here: https://github.com/geekau/mediastack

In this stack I am running the following services:
- Portainer
- Jellyfin
- Jellyseerr
- Homarr 
- Prowlarr
- Radarr
- Sonarr
- Readarr
- Bazarr
- SABnzbd
- qBittorrent
- Filebot

### Game-Server
The last VM I created was my ‘game-server’ VM, which I decided to run headless on Ubuntu 20.04 LTS.

My friends and I play a lot of Minecraft and wanted to stop paying for realms or dedicated servers. So, I installed Java and configured this VM to run a dedicated Minecraft server.

Within this VM, I wrote scripts to perform daily server restarts and backups to ensure performance and reliability.

After successfully setting up the server, I faced the challenge of allowing my friends outside my home network to connect to it safely. I didn’t feel comfortable port forwarding my router and am quite proud of the solution I devised.

Initially, I decided to use Tailscale as an easy-to-use VPN to allow my friends to connect to the server. I have installed tailscale directly onto the VM and then share the specific machine access to my friends via the Tailscale admin console.

## Conclusion
This has been a broad overview of how I’ve utilized my HomeLab for personal use and learning. I highly encourage anyone thinking about setting up a HomeLab to go for it. You can achieve almost everything I’ve done with any functional spare computer. Thank you for reading, and if you have any questions, feel free to reach out!