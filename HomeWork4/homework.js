const concatStrings = (string, separator) => {
    if(!separator || separator === null || separator !== `${separator}`) separator = '';
    if(string && string !== null && string === `${string}` &&  string !== undefined) {
        return (secondString) => {
            if(secondString !== `${secondString}` || secondString === null){
                return string
            } else {
            return concatStrings(string + separator + secondString, separator)
            }
        }
    }
};
console.log(concatStrings('2')('second')('third')()
)

class Calculator {
    constructor(x,y){
        if(!Number.isSafeInteger(x) || !Number.isSafeInteger(y)) {
            throw new TypeError('Arguments should be integers');
        };
        if(!x || !y) {
            throw new Error('It should be to arguments');
        };
        this.x = x;
        this.y = y;
        this.logMul = this.logMul.bind(this);
        this.logSub = this.logSub.bind(this);
        this.logSum = this.logSum.bind(this);
        this.logDiv = this.logDiv.bind(this);
    };
    setX(value) {
        if(Number.isSafeInteger(value)){
            this.x = value
        } else {
            throw new TypeError('Value should be safe integer');
        };
    };
    setY(value) {
        if(Number.isSafeInteger(value)) {
            this.y = value
        } else {
            throw new TypeError('Value should be safe integer');
        };
    };
    logSum() {
        console.log(this.x + this.y);
    };
    logMul() {
        console.log(this.x * this.y);
    };
    logSub() {
        console.log(this.x - this.y);
    };
    logDiv() {
        console.log(this.x / this.y);
    };
};