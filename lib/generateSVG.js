function generateSVG(data) {
    const { text, textColor, shape, shapeColor } = data;
    let shapeEl;

    switch (shape) {
        case 'Circle':
            shapeEl = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;    
            break;
        case 'Square':
            shapeEl = `<rect x="90" y="40" width="150" height="150" fill='${shapeColor}' />`;
            break;
        case 'Triangle':
            shapeEl = `<polygon points="125, 18 244, 182 10, 182" fill="${shapeColor}" />`
            break;
        default: console.error('Please enter a valid shape.');
        return;
    }
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeEl}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`
}

module.exports = generateSVG;