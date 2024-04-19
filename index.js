
const {Circle} = require( './lib/shape.js' );
const {Triangle} = require( './lib/shape.js' );
const {Square} = require( './lib/shape.js' );
const inquirer = require('inquirer'); //inquirer module
const fs = require('fs'); //file system module

const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter up to three characters for the shape Logo'
    },
    {
        type: 'input',
        name: 'logoTextColor',
        message: 'Enter the texy color (Hex# or Keyword) of the file'
    },
    
    {
        type: 'list',
        name: 'shapeType',
        message: 'Select a shape',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color of the shape'
    }

];

//function to create the logo
inquirer.prompt(questions).then(answers => {
    let shapeObj;
    switch(answers.shapeType)
    {
        case 'Circle':
            shapeObj = new Circle();
            break;
        case 'Square':
            shapeObj = new Square();
            break;
        case 'Triangle':
            shapeObj = new Triangle();
            break;
    }
    shapeObj.setColor(answers.shapeColor);
    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    ${shapeObj.render()}
                    <text x="150" y="130" font-size="60" text-anchor="middle" fill="${answers.logoTextColor}">${answers.logoText}</text>
                </svg>`;
    fs.writeFileSync('./Assets/logo.svg', svg);
    console.log('Logo created successfully');
});