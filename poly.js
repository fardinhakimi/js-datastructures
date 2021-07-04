class Shape {
    constructor() {
    }
    async area () {
        return 15;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r;
    }

    area = async () => {
        return await super.area() + 20
    }
}

const circle = new Circle(10)

console.log(typeof(circle['area']))