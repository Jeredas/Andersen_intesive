const myIterable = { 
    from: 1,
    to: 4,
    [Symbol.iterator]: function *() {
        let from = parseInt(this.from);
        let to =parseInt(this.to);
        if(isNaN(from) || isNaN(to)) throw new TypeError('Only numbers allowed');
        if(from > to) throw new RangeError('"From" can\'t be bigger than "to"');
        for(let i = from; i <= to; i++){
            yield i;
        };
    },
};
