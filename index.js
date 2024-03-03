//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Text',
        message: 'Please enter up to three characters you would like to display on your logo.'
    },
    {
        type: 'input',
        name: 'Text Color',
        message: 'Please enter a color keyword or a hexadecimal number to set the color of your logo text.'
    },
    {
        type: 'list',
        name: 'Shape',
        message: 'Please choose a shape for your logo.',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'Shape Color',
        message: 'Please enter a color keyword or a hexadecimal number to set the color of your logo shape.'
    }
]

//Function to initialize the application
async function init() {
    try {
        const data = await inquirer.prompt(questions);
        // writeReadme(data);
    } catch (err) {
        console.error(err);
    }
};

init();