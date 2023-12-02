class Shapes {
    constructor() {
        this.color=''
    }
    chosenColor(color) {
        this.color=(color);
    }
};

class Triangle extends Shapes {
    render() {
        return `<polygon points="150 0, 300 200, 0 200" fill='${this.color}' />`
    }
};

class Square extends Shapes {
    render() {
        return `<rect x='50' y='10' height='200' width='200' fill='${this.color}' />`
    }
};

class Circle extends Shapes {
    render() {
        return `<circle cx='50%' cy='50%' r='100' fill='${this.color}' />`
    }
}

module.exports={Triangle, Square, Circle};