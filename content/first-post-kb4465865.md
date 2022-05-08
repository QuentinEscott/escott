+++
author = "Quentin Escott"
categories = ["Hotfix"]
date = 2020-05-03T03:15:00Z
description = "I thought it would be apt for my first SCCM post to discuss the first Microsoft KB that the team and I created. It was KB4465865. We were up to date with our SCCM install (Current Branch 1806), so we could get the Microsoft engineering team to make a hotfix for us. It took many hours on the phone."
image = ""
title = "First post - KB4465865"
type = "post"

+++
I thought it would be apt for my first SCCM post to discuss the first Microsoft KB that the team and I created. It was [KB4465865](https://support.microsoft.com/en-au/help/4465865/software-updates-do-not-download-in-configmgr-if-wsus-is-disconnected). We were up to date with our SCCM install (Current Branch 1806), so we could get the Microsoft engineering team to make a hotfix for us. It took many hours on the phone. Here is the symptoms section from Microsoft's site.

# Software updates do not download in Configuration Manager environment if WSUS is disconnected

_System Center Configuration Manager (current branch - version 1806)_

## Symptoms

The following scenarios are fixed by this hotfix:

* After you update to Configuration Manager current branch, version 1806, software updates do not download. This failure occurs only in environments that use Windows Server Update Services (WSUS) on a disconnected (air gapped) network.  
    
  A change is introduced in version 1806 so that Configuration Manager always looks for express installation CAB files that are, by default, not present in a disconnected WSUS scenario.

  An attempted download occurs for any software update (including non-Windows 10 updates) that contains express installation files. The download attempt also occurs if [express installation file support](https://docs.microsoft.com/sccm/sum/deploy-use/manage-express-installation-files-for-windows-10-updates) is not enabled.

  Errors that resemble the following are recorded in the Patchdownloader.log file on the site server:

  Downloading content for ContentID = _<ContentID>_, FileName = _<Filename-EXPRESS.cab>_  
  Download \\\\_<server>_\\WsusContent\\_<Filename-EXPRESS.cab>_ to _<Temporary Files>_\\CABA83C.tmp returns 2  
  Download \\\\_<server>_\\WsusContent\\_<Filename-EXPRESS_hash.cab>_ to _<Temporary Files>_\\CABA83D.tmp returns 2  
  Download \\\\_<server>_\\WsusContent\\WsusContent\\C1\\_<hash.cab>_ to _<Temporary Files>_\\CABA83E.tmp returns 3  
  Download \\\\_<server>_\\WsusContent\\C1\\_<hash.cab>_ to _<Temporary Files>_\\CABA84F.tmp returns 2  
  ERROR: DownloadContentFiles() failed with hr=0x80070002
* When you migrate to or from Configuration Manager current branch, version 1806, the migration of content packages for updates that support express installation files either fail or may not contain all updates. This issue occurs in hierarchies that have not enabled the following option on the “Update files” tab of Software Update Point properties:

  **Download both full files for all approved updates and express installation files for Windows 10**

  **Note** Updates synchronized after this update is applied no longer fail in this scenario.


* For software updates that contain express installation files, Configuration Manager synchronizes the Express.cab file and distributes it to the client. This behavior occurs even if the client does not require the Express.cab file for a given deployment.  
    
  This behavior is mainly cosmetic. It does not involve the complete set of express installation files, only the Express.cab file.

**Note** Installing the hotfix will stop the unconditional download attempts for express CAB files for new updates. After the hotfix is installed, downloading will occur only if express installation file support is enabled for Windows 10 updates.