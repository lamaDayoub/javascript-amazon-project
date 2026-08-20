class Car {
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;
    constructor(brand, model) {
        this.#brand = brand;
        this.#model = model;

    }
    displayInfo() {
        return `brand : ${this.#brand}, model : ${this.#model},speed : ${this.speed} km/h , trunkOpen : ${this.isTrunkOpen}`;
    }
    go() {
        if (this.speed <= 195 && this.isTrunkOpen === false)
            this.speed += 5;
    }
    brak() {
        if (this.speed >= 5 && this.isTrunkOpen === false)
            this.speed -= 5;
    }
    openTrunk() {
        if (this.speed === 0)
            this.isTrunkOpen = true;
    }
    closeTrunk() {
        this.isTrunkOpen = false;
    }
}
class RaceCar extends Car {
    acceleration;
    constructor(brand, model, acceleration) {
        super(brand, model);
        this.acceleration = acceleration;
    }
    go() {
        if (this.speed <= (300 - this.acceleration))
            this.speed += this.acceleration;
    }
    openTrunk() {
        this.isTrunkOpen = false;

    }
    closeTrunk() {
        this.isTrunkOpen = false;

    }
}
/*const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Tesla', 'Model 3');

console.log(car1);
car1.openTrunk();
car1.displayInfo();
car1.go();
car1.go();
car1.closeTrunk();
car1.go();
console.log(car1.displayInfo());
car1.brak();
car1.brak();
car1.brak();
car1.brak();
car1.closeTrunk();
car1.brak();
console.log(car1.displayInfo());


const racecar = new RaceCar('McLasren', 'F1', 20);
racecar.go();
racecar.go();
racecar.go();
console.log(racecar.displayInfo());*/