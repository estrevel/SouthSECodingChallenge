# SouthSECodingChallenge
Submission for the Enterprise South Area SE Coding Challenge

Description:

The included file, Max Occupancy Alert.js is a Cisco CE Endpoint Macro that is designed to automatically detect a condition where more people are in a conference room than has been authorized by a fire marshall or other legal regulations.  

Using the PeopleCount RoomAnalytics variable in the codec's API, the macro places a visual and audible alert on the Touch 10 and the room display whenever the number of people in view of the camera exceeds the MAX_PEOPLE constant coded in the macro.

It also places any outgoing or incoming call on hold if the max occupancy is exceeded when the call is placed or received.  A dialog box on the Touch 10 offers the option of scheduling another room or continuing the call.

Installation:

This macro may be installed on any Cisco Webex Room Kit, Room Kit Plus, Room Kit Pro, Room Kit Mini, Room 55, or Room 70 endpoint running CE 9.2 software or later.  It has been tested with CE 9.6.1 on a Cisco Room Kit.  It requires that the endpoint be registered on-prem due to the call hold/resume functionality that it leverages.

	1.	Login to Cisco Endpoint web interface with admin credentials
	2.	Navigate to Setup--> Configuration--> RoomAnalytics
	3.	Set PeopleCountOutOfCall and PeoplePresenceDetector to On
	4.	Navitage to Integration --> Macro Editor
	5.	Select Import from File... on left hand menu
	6.	Select the Max Occupancy Alert.js file in this distribution
	7.	Change const MAX_PEOPLE as needed for testing.   Any number of people in camera view that exceeds this number will trigger the alerts
	8.	After it has uploaded, click slider to enable the macro

Usage:

	1.	Exceed MAX_PEOPLE count.  Observe on-screen alert on Touch 10 and display
	2.	While exceeding MAX_PEOPLE count, place a call from Touch 10.  Observe that call is placed on call.  Choose either of the 2 options and observe results.

Files:

	1.	README.md - this file
	2.	Max Occupancy Alert.js - macro to be loaded on codec
	3.	LICENSE - Cisco Sample Code License
