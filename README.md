# Email Checker

## Problem Given

#### Please write a web service that accepts http requests and returns responses based on the following problem statement. You may define the request and response format as you see fit based on the problem statement.

#### Problem statement: Accept a list of email addresses and return an integer indicating the number of unique email addresses. Where "unique" email addresses means they will be delivered to the same account using Gmail account matching. Specifically: Gmail will ignore the placement of "." in the username. And it will ignore any portion of the username after a "+".Examples:test.email@gmail.com, test.email+spam@gmail.com and testemail@gmail.com will all go to the same address, and thus the result should be 1.

### Programming language: JavaScript

### Framework: Express

### Instructions For Installation

- Fork and clone this repository
- In your terminal, run the command `npm install express` and `npm install express-router`
- To run the server on your localhost, run the command `nodemon`
- You can either run tests in your terminal or make a GET request in Postman to retrieve the output.

## Thought Process

- In the /controllers/emailController.js file, is where the code to execute the problem statement takes place. I went about it using vanilla javascript.
- In the emails.js file, I wrote a couple of assertion tests. I created two arrays with example emails, and ran tests for both of them. If you wish to run the tests, in your terminal run the command `node emails.js`
