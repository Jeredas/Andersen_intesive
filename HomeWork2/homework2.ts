const makeObjectDeepCopy = (targetObject) => {
    if (typeof targetObject !== 'object' || targetObject === null) {
      return targetObject;
    };
    let result = Array.isArray(targetObject) ? [] : {};
    for (let key in targetObject) {
      let value = targetObject[key];
      result[key] = makeObjectDeepCopy(value);
    };
    return result;
  }

const selectFromInterval = (arr: number[], first: number, second: number) => {
   if(!Array.isArray(arr)) throw new TypeError('First argument should be an array');
   if(
    arr.some((elem)=> !Number.isInteger(elem)) ||
    !Number.isInteger(first) ||
    !Number.isInteger(second)
     ) throw new TypeError('Only integers allowed');
    const interval = arr.filter((elem) => {
        if(first > second) {
            return elem <= first && elem >= second; 
        } else {
            return elem >= first && elem <= second;
        }; 
    });
    return interval.sort();
}

const myIterable = { 
    from: 1,
    to: 4,
    [Symbol.iterator]: function *() {
        if(
            isNaN(this.from) || !Number.isInteger(this.from) ||
            isNaN(this.to) || !Number.isInteger(this.to)
        ) throw new TypeError('Only integers allowed');
        if(this.from > this.to) throw new RangeError('"From" can\'t be bigger than "to"');
        for(let i = this.from; i <= this.to; i++){
            yield i;
        };
    },
};
