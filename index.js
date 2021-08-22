// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const = generateMarkdown = require("./index.js/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    name: "title",
    message: "What is your projects name?",
  },
  {
    type: "input",
    name: "description",
    message: "Brief description of project",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license does your project use?",
    choices: ["MIT", "BDS 3"],
  },
  {
    type: "input",
    name: "installation",
    message: "What commands should be run for dependacies?",
  },
  {
    type: "input",
    name: "test",
    message: "What commands should we run for tests?",
  },
  {
    type: "input",
    name: "contributor",
    message: "How does a user contribute to this file?",
  },
];

// inquirer.prompt(questions).then((data) => {
//   console.log(data);
// });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFile("README.md", JSON.stringify(data), (error) => {
      error ? console.log(error) : console.log("file was written");
    });
  });
}

// Function call to initialize app
init();