+++
author = "Quentin Escott"
categories = ["Group Policy", "MECM", "SCCM"]
date = 2022-12-05T13:00:00Z
description = ""
draft = true
image = ""
title = "Group Policy Requested Site Assignment Code"
type = "post"

+++
During a MECM migration from one site to another in a different domain, Group Policy was used to set the site code on the old instance. I found that we could not change the site code even after the GPO was disabled. The LocationServices.log pointed me in the right direction. It had a message about the site code being set by Group Policy every time I pressed the "Find Site" button. Even after an uninstall of the MECM client, the site code would not change. After digging around in the registry for the site code, I found these keys in HKLM:\\SOFTWARE\\Microsoft\\SMS\\Mobile Client.   
  
**GPRequestedSiteAssignmentCode**

**GPSiteAssignmentRetryInterval(Min)** 

**GPSiteAssignmentRetryDuration(Hour)**

The fix was to delete the keys and the new site code was able to be set.