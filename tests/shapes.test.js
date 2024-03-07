const { Circle, Triangle, Square } = require('../lib/shapes')
const generateSVG = require('../lib/generateSVG')

describe('Circle', () => {
    it('should return a circle that takes user input and applies a font, font color, and shape color based on that input', () => {
        const circle = new Circle('Hello', 'black', 'circle', 'red');
        const result = circle.render()
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="red" /> 
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Hello</text>`
        expect(result).toEqual(expectedSVG)
    })
});

describe('Triangle', () => {
    it('should return a triangle that takes user input and applies a font, font color, and shape color based on that input', () => {
        const triangle = new Triangle('Hello', 'black', 'triangle', 'red');
        const result = triangle.render()
        const expectedSVG = `<polygon points="125, 18 244, 182 10, 182" fill="red" />
        <text x="125" y="150" font-size="60" text-anchor="middle" fill="black">Hello</text>`
        expect(result).toEqual(expectedSVG)
    })
});

describe('Square', () => {
    it('should return a square that takes user input and applies a font, font color, and shape color based on that input', () => {
        const square = new Square('Hello', 'black', 'square', 'red');
        const result = square.render()
        const expectedSVG = `<rect x="90" y="40" width="150" height="150" fill="red" />
        <text x="165" y="125" font-size="60" text-anchor="middle" fill="black">Hello</text>`
        expect(result).toEqual(expectedSVG)
    })
});