// polyfill of map
Array.prototype.customMap = function (callbackFn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const val = callbackFn(this[i]);
    result.push(val);
  }
  return result;
};

const arr = [1, 2, 3];
const arrData = arr.customMap((item) => item * 2);
console.log(arrData);
