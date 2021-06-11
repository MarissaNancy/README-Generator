
// TODO: Create a function to generate markdown for README

//function to generate markdowns
function generateMarkdown(data) {
  
  return `# ${data.title}

  ## Descirption
  ${data.description}

  ## Table of Contents
  ${data.tofcont}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage} 

  ## License
  ${data.license} 
//   ![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)
// ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

  ## Contributing 
  ${data.contributing}

  ## Test
  ${data.test}

  ##Questions
  ${data.questions}


`;
}

//module is exported so it can generate sections for file will go
module.exports = generateMarkdown;
//the generateMarkdown needs to be required in index.js


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   //if
//   //else return empty string?
// }
//should this go inside?
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
// //
// }