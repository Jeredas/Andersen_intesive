Array.prototype.myFilter = function(callback, context) {
  if (typeof callback !== 'function') {
    throw new TypeError('First argument should be function');
  }
  if (this === void 0 || this === null) {
    throw new TypeError();
  }
  var resultArray = [];
  this.map((elem, index)=>{
    if (callback.call(context, elem, index, this)){
      resultArray.push(elem);
    }
  })
  return resultArray;
};

const  createDebounceFunction = (callback, delay) => {
  return () => {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(callback, delay);
  }
};
