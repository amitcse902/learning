// Polyfill for forEach
Array.prototype.customforEach = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    callbackFn(this[i]);
  }
};
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = [];
list.customforEach((item) => {
  result.push(item);
});
console.log(result);
