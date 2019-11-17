# Vasc-Alert Javascript Integration Demo

This is a very basic javascript project demonstrating ways to link into the Vasc-Alert Online service.

This is an early iteration of this demo and includes one test case that uses a POST request to view a single patient detail report.
More examples will be added as features/links are requested.

This project depends on having Node.js (and npm) installed. npm will manage all the dependencies for you. You can get more information
and download Node.js at [the official Nodejs website](https://nodejs.org/ "Official Nodejs Website").

To get started with this project, type ```npm install``` in the root directory of the project.

### API

The following keys are used in making requests of the Vasc-Alert Integration API. The application is a quick demonstration, via javascript, on how these keys are implemented.

* **systemAPIKey:** The key assigned to the system requesting access. This is used as part of the process for authorizing a request to the remote system.
* **userId:** The user id for the local system. This will be used to identify the user to the Vasc-Alert system for purposes of auditing.
* **facilityId:** This is a pre-defined unique identifer for the facility related to this request. (e.g. userId at facilityId is requesting this information from Vasc-Alert)
* **mrn:** Medical Record Number of the patient detail being requested
requestTime: The current time of the request
* **checksum:** The checksum is calculated to increase the confidence that the request is valid and has not been tampered with or forged. Each remote system has a unique checksum recipe that will be matched on the server side to confirm agreement on content and authenticity between the client constructed request and the server. When starting up this remote service, the checksum recipe will be provided along with a sample implementation.



### CHANGELOG

#### 2018-01-13

Minor edits to README.md including API

#### 2016-11-14

Generic POST example shows calculating checksum and encoding data payload for submitting (although if you just submit the form,
the browser will do that for you)
