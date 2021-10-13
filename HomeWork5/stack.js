class Stack {
    #top = null;
    #size = 0;
    constructor(elemsCount) {
        this.top = null;
        this.size = 0;
        elemsCount ? this.elemsCount = elemsCount : this.elemsCount = 10;
        if(elemsCount < 1) {
            console.log(1 > Infinity)
            throw new RangeError('Value can\'t be less than 1');
        } else if(!Number.isSafeInteger(elemsCount)){
            throw new TypeError('Value should be safe integer');
        };
        this.toArray = this.toArray.bind(this);
        this.push = this.push.bind(this);
    }
    push(elem) {
        console.log(elem)
        if (this.top === null) {
            this.top = { value: elem, next: null };
            this.size += 1;
        } else {
            if(this.size + 1 > this.elemsCount){
                throw new RangeError('Stack overflow');
            } else {
            this.top = { value: elem, next: this.top };
            this.size += 1;
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
        if(this.top.next === null) {
            this.top = null;
            this.size--;
        } else {
            this.top = { value: this.top.next.value, next: this.top.next.next };
            this.size--;
        }

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
        if(stackTop.next === null){
            resultArr.push(stackTop.value);
        }
        return resultArr;
    };
    static fromIterable(iterable) {
        if (typeof iterable[Symbol.iterator] === 'function') {
            const stack = new Stack(Array.from(iterable).length);
           Array.from(iterable).forEach((elem) => {
                stack.push(elem);
            })
            return stack;
        } else {
            throw new TypeError('Value is not iterable');
        }

    };
};

const stack = new Stack(20);
stack.push(123);
stack.peek()
console.log(stack.toArray())
stack.push('astas');
stack.push('11111');
stack.push('11111');
stack.push('11111');
stack.push('11111');
stack.push('11111');
// stack.push('11111');
// stack.push('11111');
// stack.push('11111');
// stack.push('11111');
// stack.push('11111');
console.log(stack.peek())
stack.push(99999);
console.log(stack.toArray())
const ll = new Stack(1);
ll.push('111');
ll.peek();
ll.push('22')
// stack.pop();
//console.log(stack.toArray())
// console.log(stack.isEmpty());
// const aaa = Stack.fromIterable([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }])
// aaa.peek()
// console.log(aaa.toArray())
// aaa.pop();
// console.log(aaa.toArray())
//aaa.push({ a: 7 })
// console.log(aaa.peek());
// /console.log(aaa.toArray())
// const ourMap = new Map([
//     [1, 'a'],
//     [2, 'b'],
//     [3, 'c'],
// ]);
// const bb = Stack.fromIterable(ourMap);
// console.log(bb.getSize());
// bb.pop()
// bb.pop()
// bb.pop()
// console.log(bb.getSize());

