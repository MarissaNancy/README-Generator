// TODO: Include packages needed for this application
//here we add the inquierer npm and the fs

const inquirer = require('inquirer');
// const fs = require('fs');
// const writeFile = require('./writefile');
// const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
//README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation,
//Usage, License, Contributing, Tests, and Questions

//array for questions 
//const questions = () => {
    //return inq
//} 
const questions = () => {
    return inquirer
        .prompt([
            //inquirer then prompt
            {
            type: 'input',
            message: 'What would you like to name your project?',
            name: 'title',
            },
            {
            type: 'input',
            message: 'Describe the project your working on:',
            name: 'description',
            },
            // {
            // type: 'input',
            // message: 'Would you like a Table of Contents? ',
            // name: 'tofcont',
            // },
            {
            type: 'input',
            message: 'Enter installation steps for your project: ',
            name: 'installation',
            },
            {
            type: 'input',
            message: 'Enter how to use your project?',
            name: 'usage',
            },
            {
            type: 'input',
            message: 'Enter the license:',
            name: 'license',
            default: 'MIT'
            },
            {
            type: 'input',
            message: 'Is there any contributors? ',
            name: 'contributing',
            },
            {
            type: 'input',
            message: 'How would you test your project? ',
            name: 'test',
            },
            {
            type: 'input',
            message: 'Provide a contact info in case someone has a question:',
            name: 'questions',
            },   

        ]);
};
    

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

questions()
//    .then((questionsresults) => {
//         return generateMarkdown(questionsresults);
//      })
//      .then(readme.md => {
//         return writeFile(readme.md)
// })

//  TODO: Create a function to write README file
//  function writeToFile(fileName, data) {
//     //generatemarkdown passed here?
// }