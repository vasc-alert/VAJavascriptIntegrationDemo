# Vasc-Alert Javascript Integration Demo

This is a very basic javascript project demonstrating ways to link into the Vasc-Alert Online service. To see the integration, open the index.html file in a browser and click submit. You can change different parameters, but the API key and other defaults are setup to be successful with the current training data. Of course, links to live data will be setup with individual systems.

This demo  includes one test case that uses a POST request to view a single patient detail report. There are a list of valid MRNs for testing, but this should give you a sense of how this works.


This project depends on having Node.js (and npm) installed. npm will manage all the dependencies for you. You can get more information
and download Node.js at [the official Nodejs website](https://nodejs.org/ "Official Nodejs Website").


### API

The following keys are used in making requests of the Vasc-Alert Integration API. The application is a quick demonstration, via javascript, on how these keys are implemented.

* **systemAPIKey:** The key assigned to the system requesting access. This is used as part of the process for authorizing a request to the remote system.
* **userId:** The user id for the local system. This will be used to identify the user to the Vasc-Alert system for purposes of auditing.
* **facilityId:** This is a pre-defined unique identifer for the facility related to this request. (e.g. userId at facilityId is requesting this information from Vasc-Alert)
* **mrn:** Medical Record Number of the patient detail being requested
requestTime: The current time of the request
* **checksum:** The checksum is calculated to increase the confidence that the request is valid and has not been tampered with or forged. Each remote system has a unique checksum recipe that will be matched on the server side to confirm agreement on content and authenticity between the client constructed request and the server. When starting up this remote service, the checksum recipe will be provided along with a sample implementation.



### CHANGELOG

#### 2019-11-20

updated master to current babel and webpack configurations

#### 2019-11-17

Update demo to reflect new information in testing facility IDs

#### 2019-07-25

Update libraries to address security issues in dependencies like axios and webpack

#### 2018-01-13

Minor edits to README.md including API

#### 2016-11-14

Generic POST example shows calculating checksum and encoding data payload for submitting (although if you just submit the form,
the browser will do that for you)
