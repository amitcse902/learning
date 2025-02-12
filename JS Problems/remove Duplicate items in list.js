const arr = [13, 14, 15, 16, 13, 14];
//with filter output [15,16];

const removeDuplicateFilter = (arr) => {
  const filterdata = arr.filter((item) => {
    return arr.indexOf(item) === arr.lastIndexOf(item);
  });
  return filterdata;
};
console.log(removeDuplicateFilter(arr));

//with reduce
const removeDuplicateReduce = (arr) => {
  const reducedata = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  return arr.filter((item) => reducedata[item] === 1);
};
console.log(removeDuplicateReduce(arr));

// normal
const removeDuplicate = (arr) => {
  const res = {};
  for (let i = 0; i < arr.length; i++) {
    if (typeof res[arr[i]] === "undefined") {
      res[arr[i]] = 0;
    }
    res[arr[i]] += 1;
  }
  const finalArr = [];
  for (let i in res) {
    if (res[i] === 1) {
      finalArr.push(i);
    }
  }
  return finalArr;
};
console.log(removeDuplicate(arr));
