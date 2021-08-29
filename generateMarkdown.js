// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license == "MIT") {
    return `
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license == "BDS 3") {
    return `
  [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`:
  }
  if (license == "Apache 2.0") {
    return `
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
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
  if (license !== "none") return "";
}


function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}
  ## Installation Instructions
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#test)
  * [License Resources](#license)
  * [Questions](#questions)
  
  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Questions
  github.com/${data.Github}

  ${data.email}
}
`;
}

module.exports = generateMarkdown;



