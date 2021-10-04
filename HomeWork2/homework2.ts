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
    arr.some((elem)=> elem !== +elem) ||
    first !== +first ||
    second !== +second
     ) throw new TypeError('Array items should be numbers');
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
        let from = parseInt(this.from);
        let to =parseInt(this.to);
        if(isNaN(from) || isNaN(to)) throw new TypeError('Only numbers allowed');
        if(from > to) throw new RangeError('"From" can\'t be bigger than "to"');
        for(let i = from; i <= to; i++){
            yield i;
        };
    },
};
