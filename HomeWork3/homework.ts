const  createDebounceFunction = (callback, delay) => {
  return () => {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(callback, delay);
  }
};