class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
    }
    append(elem) {
        const node = { value: elem, next: null };
        if (this.last !== null) {
            this.last.next = node;
        };
        if (this.first === null) {
            this.first = node;
        };
        this.last = node
    };

    prepend(elem) {
        const node = { value: elem, next: this.first };
        this.first = node;
        if (this.last === null) {
            this.last = node;
        };
    };

    find(elem) {
        if (this.first === null) return;
        let current = this.first;
        while (current !== null) {
            if (elem === current.value) return elem;
            current = current.next;
        }
        return null;
    };
    toArray() {
        let result = [];
        let current = this.first;
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        };
        return result;
    };
    static fromIterable(iterable) {
        if (typeof iterable[Symbol.iterator] === 'function') {
            const linkedList = new LinkedList(Array.from(iterable).length);
            Array.from(iterable).forEach((elem) => {
                linkedList.append(elem);
            });
            return linkedList;
        } else {
            throw new TypeError('Value is not iterable');
        };
    };
};
const myIterable = {
    from: 1,
    to: 6,
    [Symbol.iterator]: function* () {
        if (!Number.isInteger(this.from) ||
            !Number.isInteger(this.to)
        ) throw new TypeError('Only integers allowed');
        if (this.from > this.to) throw new RangeError('"From" can\'t be bigger than "to"');
        for (let i = this.from; i <= this.to; i++) {
            yield i;
        };
    },
};
