 class Car {
    #brand;
    #model;
    #yearOfManufacturing
    #maxSpeed
    #maxFuelVolume
    #fuelConsumption
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    constructor() {
    }
    set brand(brandName) {
        if (brandName === `${brandName}`) {
            this.#brand = brandName
        } else {
            throw new TypeError('Brand name should be a string')
        };
    };
    get brand() {
        return this.#brand;
    };
    set model(modelName) {
        if (modelName === `${modelName}`) {
            this.#model = modelName;
        } else {
            throw new TypeError('Model name should be a string')
        };
    };
    get model() {
        return this.#model;
    };
    set yearOfManufacturing(year) {
        if (year < 1900 || year > new Date().getFullYear()) {
            throw new RangeError('Year can\'t be less than 1900 and bigger than current year');
        };
        if (!Number.isSafeInteger(year)) throw new TypeError('Year should be safe integer');
        this.#yearOfManufacturing = year;
    };
    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    };
    set maxSpeed(speed) {
        if (!Number.isSafeInteger(speed)) throw new TypeError('Speed should be safe integer');
        if (speed < 100 || speed > 300) {
            throw new RangeError('speed can\'t be less than 100 and bigger than 300');
        };
        this.#maxSpeed = speed;
    };
    get maxSpeed() {
        return this.#maxSpeed;
    };
    set maxFuelVolume(fuelVolume) {
        if (!Number.isSafeInteger(fuelVolume)) throw new TypeError('Fuel volume should be safe integer');
        if (fuelVolume < 5 || fuelVolume > 20) {
            throw new RangeError('Fuel volume can\'t be less than 5 and bigger than 20');
        };
        this.#maxFuelVolume = fuelVolume;
    };
    get maxFuelVolume() {
        return this.#maxFuelVolume;
    };
    get currentFuelVolume() {
        return this.#currentFuelVolume;
    };
    set fuelConsumption(fuelConsumption) {
        if (!Number.isSafeInteger(fuelConsumption)) throw new TypeError('Fuel consumption should be safe integer');
        if (fuelConsumption < 0) {
            throw new RangeError('Fuel consumption can\'t be less than 0');
        };
        this.#fuelConsumption = fuelConsumption;
    };
    get fuelConsumption() {
        return this.#fuelConsumption;
    };
    get milege() {
        return this.#mileage;
    };

    start() {
        if (this.isStarted) throw new Error('Engine is already started');
        this.#isStarted = true;
    };
    shutDownEngine() {
        if (!this.#isStarted) throw new Error('Engine is not started yet');
        this.#isStarted = false;
    };
    fillUpGasTank(volume) {
        if (!Number.isSafeInteger(volume) || volume <= 0) throw new TypeError('Invalid fuel volume for fillng up gas tank');
        if (this.#maxFuelVolume < this.#currentFuelVolume + volume) throw new RangeError('Gas tank is overflowed');
        this.#currentFuelVolume += volume;
    };
    drive(speed, hours) {
        if (!Number.isSafeInteger(speed) || speed <= 0) throw new TypeError('Invalid speed');
        if (!Number.isSafeInteger(hours) || hours <= 0) throw new TypeError('Invalid hours count');
        if (!this.#isStarted) throw new Error('Engine should be started');
        let distantion = speed * hours;
        console.log(`distantion`,distantion);
        let driveConsuption = distantion * this.#fuelConsumption / 100;
        console.log(`driveConsuption`,driveConsuption)
        if (this.#currentFuelVolume - driveConsuption < 0) {
            throw new RangeError('Not enough fuel');
        } else {
            this.#currentFuelVolume -= driveConsuption;
            this.#mileage += distantion;
        };
    };

};

const car = new Car();

car.brand = 'tesla';
car.model = 's';
car.fuelConsumption = 5;
car.maxFuelVolume = 20;
car.maxSpeed = 200;
car.yearOfManufacturing = 2021;
console.log(car.currentFuelVolume);
car.fillUpGasTank(20);
console.log(car.currentFuelVolume)
car.start();
car.drive(60,3);
console.log(car.milege)
console.log(car.currentFuelVolume, `currentFuelVolume`);
car.drive(80,2);
console.log(car.milege, 'milage');
car.shutDownEngine();
car.start();
car.fillUpGasTank(20 - car.currentFuelVolume);
car.drive(200,1);
