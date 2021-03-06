// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");
const path = require ("path")


// TODO: Create an array of questions for user input
const questions = [
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
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license does your project use?",
    choices: ["MIT", "BDS 3", "APACHE 2.0", "none or other"],
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
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
  }
];

// inquirer.prompt(questions).then((data) => {
//   console.log(data);
// });

// TODO: Create a function to write README file
function writeToFile(fileInfo, response) {
  return fs.writeFileSync(path.join(process.cwd(),fileInfo), response)
}


function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log(inquirerResponses)
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));
  });
}


init();
