const {Triangle, Square, Circle} = require('./shapes');

describe('Triangle', () => {
    test('Rendering completed successfully', () => {
        const shape = new Triangle();
        const color = 'blue';
        shape.chosenColor(color);
        expect(shape.render()).toEqual(`<polygon points="150 0, 300 200, 0 200" fill='${color}' />`)
    });
});

describe('Square', () => {
    test('Rendering completed successfully', () => {
        const shape = new Square();
        const color = 'yellow';
        shape.chosenColor(color);
        expect(shape.render()).toEqual(`<rect x='50' y='10' height='200' width='200' fill='${color}' />`)
    });
});

describe('Circle', () => {
    test('Rendering completed successfully', () => {
        const shape = new Circle();
        const color = 'red';
        shape.chosenColor(color);
        expect(shape.render()).toEqual(`<circle cx='50%' cy='50%' r='100' fill='${color}' />`)
    });
});