function generateMarkdown(data) {
  let license;

  if(data.license.includes(" "))
    license = data.license.replace(" ", "%20");
  else
    license = data.license;

  let licenseUrl = `https://img.shields.io/badge/license-${license}-blue.svg`;
  let ticks = "```";
  let installation = 
  `${ticks}
  ${data.installation}
  ${ticks}`;
  let test = 
  `${ticks}
  ${data.test}
  ${ticks}`;
  let badge = `![Github License](${licenseUrl})`;
  let github = `[${data.username}](https://github.com/${data.username})`
  let content = 
  `
  # ${data.title}
  ${badge}

  ## Table of contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  To install the necessary dependencies, run the following command
  ${installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.license} license

  ## Contributing
  ${data.contributing}

  ## Tests
  To run test, run the following command
  ${test}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${github}.`;

  return content;
}

module.exports = generateMarkdown;
