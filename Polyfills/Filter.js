// PolyFill For Filter
Array.prototype.customFilter = function (callbackFn, thisArg) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      if (callbackFn.call(thisArg, arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
  }
  return result;
};
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredData = list.customFilter((item) => {
  return item % 2 === 0;
});
console.log(filteredData);
