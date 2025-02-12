// Polyfill for reduce
Array.prototype.customReducer = function (reducer, initialValue) {
  const arr = this;
  let result = arr[0];
  let init = 1;
  if (typeof initialValue !== "undefined") {
    result = initialValue;
    init = 0;
  }
  for (let i = init; i < arr.length; i++) {
    result = reducer(result, arr[i]);
  }
  return result;
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reducer(acc, curr) {
  return acc + curr;
}

const reduceSumCustom = list.customReducer(reducer, 1);
console.log(reduceSumCustom);
