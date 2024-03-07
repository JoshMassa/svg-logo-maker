const { Circle, Triangle, Square } = require('./shapes')

function generateSVG(data) {
    const { text, textColor, shape, shapeColor } = data;
    let shapeInstance;

    switch (shape) {
        case 'Circle':
            shapeInstance = new Circle(text, textColor, shape, shapeColor);
            break;
        case 'Triangle':
            shapeInstance = new Triangle(text, textColor, shape, shapeColor);
            break;
        case 'Square':
            shapeInstance = new Square(text, textColor, shape, shapeColor);
            break;
        default:
            throw new Error('Please select a valid shape');
    }

    const shapeEl = shapeInstance.render();

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeEl}
    </svg>`;
}

module.exports = generateSVG;