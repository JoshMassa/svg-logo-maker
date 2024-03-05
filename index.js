//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Import required code from other files
const {Circle, Triangle, Square} = require('./lib/shapes')
const generateSVG = require('./lib/generateSVG')

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

//Function to write SVG file
const writeSVG = (data) => {
    const svgContent = generateSVG(data);
        fs.writeFile('logo.svg', svgContent, (err) => {
            //Display error if error, otherwise indicate svg was generated
            err ? console.error(err) : console.log(`\x1b[36m${'Generated logo.svg'}\x1b[0m`)
        });
            //Display user's answers after finishing prompts
            console.log(`\x1b[35m${'Your answers were: '}\x1b[0m`, data);
};

//Function to initialize the application
async function init() {
    try {
        //Display questions to user in terminal
        const data = await inquirer.prompt(questions);
        console.log('User Input Data: ', data);
        //Write the SVG file
        writeSVG(data);
    } catch (err) {
        //Catch and display any errors
        console.error(err);
    }
};

//Call function to initialize application
init();