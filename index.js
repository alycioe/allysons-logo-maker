const fs = require("fs");

const inquirer = require("inquirer");

const {Triangle, Square, Circle} = require("./lib/shapes");

class SVGLogo {
    constructor(textElement, textColor, shapeClass) {
        this.textElement = textElement;
        this.textColor = textColor;
        this.shape = new shapeClass();
    }

    render() {
        const shapeSVG = this.shape.render();
        const textSVG = `<text x='150' y='100' font-size='50' text-anchor='middle' fill='${this.textColor}'>${this.textElement}</text>`
        return `<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='300' height='200'>${shapeSVG}${textSVG}</svg>`;
    }

    chosenColor(color) {
        this.shape.chosenColor(color);
    }
}

inquirer.prompt([
    {
        name: 'textElement',
        message: 'Please choose 3 letters for your logo!',
        type: 'input',
    },
    {
        name: 'textColor',
        message: 'Now choose your text color!',
        type: 'input',
    },
    {
        name: 'shape',
        message: 'Which shape would you like your logo to be?',
        choices: ['Triangle', 'Square', 'Circle'],
        type: 'list',
    },
    {
        name: 'shapeColor',
        message: 'Lastly, pick a color for your logo shape!',
        type: 'input',
    }
]).then((answers) => {
    const selectedShapeClass = answers.shape === 'Triangle' ? Triangle : (answers.shape === 'Square' ? Square : Circle);

    const yourLogo = new SVGLogo(
        answers.textElement,
        answers.textColor,
        selectedShapeClass,
    );

    yourLogo.chosenColor(answers.shapeColor);

    const svgContent = yourLogo.render();

    fs.writeFileSync('logo.svg', svgContent);

    console.log('Logo generated successfully!')
});