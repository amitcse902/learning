//Flatten Array with  forEach

const input = [1, [2, 3, [4]], [5, 6, [7, 8]], 9, 10];
// expected output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const flattenArrWithForEach = (arr, res = []) => {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flattenArrWithForEach(item, res);
    } else {
      res.push(item);
    }
  });
  return res;
};
console.log(flattenArrWithForEach(input));

//Flatten Array with  for Loop
const flattenArrWithFor = (arr, res = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArrWithFor(arr[i], res);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};
console.log(flattenArrWithFor(input));

// Flatten Array with  Reduce
const flattenArrWithReduce = (arr) => {
  const fltArr = arr.reduce((acc, val) => {
    return Array.isArray(val)
      ? acc.concat(flattenArrWithReduce(val))
      : acc.concat(val);
  }, []);
  return fltArr;
};
console.log(flattenArrWithReduce(input));

// Flatten Array with sorted value
let array = [1, 2, [3, 4, [6, 7]], [9, 1, [3, 6, 7, [11]]], 10, 22, 12];
//result = [1,2,3,4,6,7,9,10,11,12,22]
const flattenArr = (arr, res = []) => {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flattenArr(item, res);
    } else {
      res.push(item);
    }
  });
  const uniqArr = [...new Set(res)].sort((a, b) => a - b);
  return uniqArr;
};
console.log(flattenArr(array));

// FlatttenArr with array method

const flattenArrMethod = (arr) => {
  const sortedMArr = [...new Set(arr.flat(Infinity))].sort((a, b) => a - b);
  return sortedMArr;
};
console.log(flattenArrMethod(array));
