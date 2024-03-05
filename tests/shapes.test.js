const { Circle, Triangle, Square } = require('../lib/shapes')
const generateSVG = require('../lib/generateSVG')

describe('Circle', () => {
    it('should return a circle that takes user input and applies a font, font color, and shape color based on that input', () => {
        const circle = new Circle();
        //TODO: Left off here, shapeEl is currently undefined in this scope
        const result = circle.render(shapeEl)
    })
})