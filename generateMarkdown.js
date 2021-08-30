// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license == "MIT") {
    return `
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license == "BDS 3") {
    return `
  [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  if (license == "Apache 2.0") {
    return `
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else {
  "none or other" 
  }
  return
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license == "MIT") {
    return `## License Resources
  https://opensource.org/licenses/MIT`;
  }
  if (license == "BDS 3") {
    return `## License Resources
  https://https://opensource.org/licenses/bsd-3-clause`;
  }
  if (license == "Apache 2.0") {
    return `## License Resources
  https://opensource.org/licenses/Apache-2.0`;
  }
  else (license !== "none") 
    return "";
  }


function generateMarkdown(data) {
  return `# ${data.title}

  # Title of Project
  ${data.title}

  ## Description  of Project
  ${data.description}

  ## Github username
  github.com/${data.Github}

  ## Table of Contents
  * [Description](#description of project)
  * [Contribution](#contribution)
  * [Tests](#test)
  * [License Resources](#license)
  * [Installation](#installation)
  
  ##License badge
  ${data.renderLicenseSection(license)}

  ##License link
  ${data.renderLicenseLink(license)}

  ## email address
  ${data.email}

  ## Installation Instructions
  ${data.installation}

  ## Commands to run for tests
  ${data.test}

  ## Contribution
  ${data.contributor}
  `


}

module.exports = generateMarkdown;
