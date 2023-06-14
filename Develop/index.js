// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
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
    name: "projectName"
  },
  {
    type: "input",
    message: "Please write a short description of your project ",
    name: "projectDescription"
  },
  {
    type: "list",
    message: "What kind of license should your project have? ",
    name: "license",
    choices: [
      "MIT",
      "APACHE 2.0,",
      "GPL 3.0",
      "BSD 3",
      "None"
    ]
  },
  {
    type: "input",
    message: "What command should be run to install dependencies? ",
    name: "command",
    suffix: "\x1b[90m(npm i)\x1b[0m"
  },
  {
    type: "input",
    message: "What command should be run to run test? ",
    name: "testing",
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(answer => {
    console.log(answer);
  });
}

// Function call to initialize app
init();
