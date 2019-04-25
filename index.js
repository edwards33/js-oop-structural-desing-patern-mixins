class Car {
    constructor(name, type, transmission, color) {
        this.name = name;
        this.type = type;
        this.transmission = transmission;
        this.color = color;
    }
}

let carMixin = {
    moving() {
        console.log(`The ${this.name} is moving on a Highway!`);
    }
}

Object.assign(Car.prototype, carMixin);

const sedan = new Car('my-car', 'Sedan', 'manual', 'red');

sedan.moving();
