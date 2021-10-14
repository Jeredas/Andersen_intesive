class Stack {
    constructor(elemsCount) {
        this.top = null;
        this.size = 0;
        elemsCount ? this.elemsCount = elemsCount : this.elemsCount = 10;
        if (elemsCount < 1) {
            throw new RangeError('Value can\'t be less than 1');
        } else if (!Number.isSafeInteger(elemsCount)) {
            throw new TypeError('Value should be safe integer');
        };
    }
    push(elem) {
        if (this.top === null) {
            this.top = { value: elem, next: null };
            this.size++;
        } else {
            if (this.size + 1 > this.elemsCount) {
                throw new RangeError('Stack overflow');
            } else {
                this.top = { value: elem, next: this.top };
                this.size++;
            };
        };
    };
    peek() {
        if (this.top === null) {
            return null;
        } else {
            return this.top.value;
        };
    };
    pop() {
        if (this.top === null) {
            throw new RangeError('Stack is empty');
        };
        if (this.top.next === null) {
            this.top = null;
            this.size--;
        } else {
            this.top = { value: this.top.next.value, next: this.top.next.next };
            this.size--;
        };
    };
    isEmpty() {
        return this.top === null;
    };
    toArray() {
        let stackTop = this.top;
        const resultArr = [];
        while (stackTop.next !== null) {
            resultArr.push(stackTop.value);
            stackTop = stackTop.next;
        };
        if (stackTop.next === null) {
            resultArr.push(stackTop.value);
        };
        return resultArr.reverse();
    };
    static fromIterable(iterable) {
        if (typeof iterable[Symbol.iterator] === 'function') {
            const stack = new Stack(Array.from(iterable).length);
            Array.from(iterable).forEach((elem) => {
                stack.push(elem);
            });
            return stack;
        } else {
            throw new TypeError('Value is not iterable');
        };
    };
};
const stack = new Stack(6);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
console.log(stack.toArray());
module.exports = { Stack };