# SouthSECodingChallenge
Submission for the Enterprise South Area SE Coding Challenge

The included file, Max Occupancy.js is a Javascript Cisco Endpoint Macro this is designed to automatically detect a condition where more people are in a conference room than has been authorized by a fire marshall or other regulations.

This macro can be installed on any Cisco Webex Room Kit, Room Kit Plus, Room Kit Pro, Room Kit Mini, Room 55, or Room 70 endpoint running CE 9.2 software or later.  It has been tested with CE 9.6.1 on a Cisco Room Kit.

Preparation:
Login to Cisco Endpoint web interface (default credentials are admin with no password)
Navigate to Setup-->Configuration-->RoomAnalytices
Set PeopleCountOutOfCall and PeoplePresenceDetector to On
Navitage to Integration --> Macro Editor
Select Import from File... on left hand menu
Select the Max Occupancy.js file in this distribution
After it has uploaded, click slider to enable the macro
See included demo video for how to demo
