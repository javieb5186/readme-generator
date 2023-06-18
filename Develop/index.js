// Packages needed for this application
const { writeFile } = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// An array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your Github Username? ",
    name: "username"
  },
  {
    type: "email",
    message: "What is your email address? ",
    name: "email"
  },
  {
    type: "input",
    message: "What is your project's name? ",
    name: "title"
  },
  {
    type: "input",
    message: "Please write a short description of your project ",
    name: "description"
  },
  {
    type: "list",
    message: "What kind of license should your project have? ",
    name: "license",
    choices: [
      "MIT",
      "APACHE 2.0",
      "GPL 3.0",
      "BSD 3",
      "None"
    ]
  },
  {
    type: "input",
    message: "What command should be run to install dependencies? ",
    name: "installation",
    suffix: "\x1b[90m(npm i)\x1b[0m"
  },
  {
    type: "input",
    message: "What command should be run to run test? ",
    name: "test",
    suffix: "\x1b[90m(npm test)\x1b[0m"
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo? ",
    name: "usage"
  },
  {
    type: "input",
    message: "What does this user need to know about contributing to repo? ",
    name: "contributing"
  }
];

// Generate data and then pass it to writeFile Function
function writeToFile(fileName, data) {
  let d = generateMarkdown(data);
  writeFile(fileName, d, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

// Prompt questions and then pass answers to writeToFile function
function init() {
  inquirer.prompt(questions)
  .then(answer => {
    console.log(answer);
    writeToFile("README.md", answer);
  });
}

// Function call to initialize app
init();
