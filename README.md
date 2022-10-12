# cypress-telnyx

Tutorial project for learning the Cypress frameworks.

<h3 align="center">Test Telnix</h3>
The purpose of this project is to test the Telnyx website: https://telnyx.com/
This project is for e2e testing the functionality of the Telnyx website.

<h3 align="center">Requirement</h3>
Download and install [VS Code] (https://code.visualstudio.com/) or any other IDE of your choice.
Download and install at least Node.js 14

<h3 align="center">Installing</h3>
In terminal type: npm install
npm init -y

npm install cypress --save-dev

npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild --save-dev

<h3 align="center">How to open and run a project</h3>
Download or clone project from repository
Open the project folder in VSCode or another IDE

The test scripts are located at: cypress\e2e\test\ \*.cy.js

The page objects are in: cypress\e2e\page\ \*.page.js

Run
Launch Cypress with the following commands in the terminal:

npx cypress open (to run in headed mode)

After a while, the cypress will open. In the window that opens, click on any of the tests: \*.cy.js
