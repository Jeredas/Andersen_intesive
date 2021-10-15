class Car {
    private brand: string;
    private model: string;
    private yearOfManufacturing: number;
    private maxSpeed: number;
    private maxFuelVolume: number
    private fuelConsumption: number;
    private currentFuelVolume: number;
    private isStarted: boolean = false;
    private mileage: number;
    
    constructor() {
    }
    setBrand(brandName:string){
        this.brand = brandName;
    };
    getBrand(){
        return this.brand;
    };
    setModel(modelName:string) {
        this.model = modelName;
    };
    getModel(){
        return this.model;
    };
    setYearOfManufacturing(year:number) {
        if(year < 1900 || year > new Date().getFullYear()) {
            throw new RangeError('Year can\'t be less than 1900 and bigger than current year');
        };
        if(!Number.isSafeInteger(year)) throw new TypeError('Year should be safe integer');
        this.yearOfManufacturing = year;
    };
    getYearOfManufacturing() {
        return this.yearOfManufacturing;
    };
    setMaxSpeed(speed: number){
        if(!Number.isSafeInteger(speed)) throw new TypeError('Speed should be safe integer');
        if(speed < 100 || speed > 300) {
            throw new RangeError('speed can\'t be less than 100 and bigger than 300');
        };
        this.maxSpeed = speed;
    };
    getMaxSpeed() {
        return this.maxSpeed;
    };
    setMaxFuelVolume(fuelVolume: number) {
        this.maxFuelVolume = fuelVolume;
    };
    getMaxFuelVolume() {
        return this.maxFuelVolume;
    };
    getCurrentFuelVolume() {
        return this.currentFuelVolume;
    };
    setFuelConsumption(fuelConsumption: number) {
        this.fuelConsumption = fuelConsumption;
    };
    getFuelConsumption() {
        return this.fuelConsumption;
    };
    getMilege(){
        return this.mileage;
    }
    start(){
        if(this.isStarted) throw new Error('Engine is already started');
        this.isStarted = true;
    };
    shutDownEngine() {
        if(!this.isStarted) throw new Error('Engine is not started yet');
    };
    fillUpGasTank(volume:number){
        if(!Number.isSafeInteger(volume) || volume <= 0) throw new TypeError('Invalid fuel volume for fillng up gas tank');
        if(this.maxFuelVolume < this.currentFuelVolume + volume) throw new RangeError('Gas tank is overflowed');
        this.currentFuelVolume +=volume;
    };
    drive(speed: number, hours: number) {
        if(!Number.isSafeInteger(speed) || speed <= 0) throw new TypeError('Invalid speed');
        if(!Number.isSafeInteger(hours) || hours <= 0) throw new TypeError('Invalid hours count');
        if(!this.isStarted) throw new Error('Engine should be started');
        let distantion = speed / hours;
        
    };

}