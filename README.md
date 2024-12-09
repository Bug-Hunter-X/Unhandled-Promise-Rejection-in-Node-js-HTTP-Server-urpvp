# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections in asynchronous operations within HTTP servers.  When an asynchronous operation fails, the server becomes unresponsive because the error is not properly handled, and no response is sent back to the client. 

## Bug Description
The `bug.js` file contains a Node.js HTTP server that uses an asynchronous function (`someAsyncOperation`). If this function throws an error, the server fails to send a response to the client, leading to a poor user experience and potential server instability.

## Solution
The `bugSolution.js` file shows the corrected version. The solution involves adding proper error handling within the `.catch()` block to ensure that a response is always sent to the client, even if an error occurs during the asynchronous operation. The response should include a relevant status code (like 500) to indicate the failure.