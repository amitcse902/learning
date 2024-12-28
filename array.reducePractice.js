const list = [1,2,3,4,5];
let initalValue = 5;
let sum = list[0];

for (let i = 1; i < list.length; i++) {
  sum += list[i];
}

console.log(sum);

function reducer (acc, curr) {
  return acc+ curr
}

const reduceSum = list.reduce(reducer);
console.log(reduceSum);

// Grouping by catagory
const items = [
  { name: 'Apple', category: 'Fruit' },
  { name: 'Onion', category: 'Vegetable' },
  { name: 'Orange', category: 'Fruit' },
  { name: 'Lettuce', category: 'Vegetable' },
];

const output = { 
  Fruit: [ 'Apple', 'Orange' ], 
  Vegetable: [ 'Onion', 'Lettuce' ] 
}

const forEachFunc = (item) => {

}

const result = {};

items.forEach((item) => {
  const {name, category} = item;
 
  if (!result[category]) {
    result[category] = [];
  }
  result[category].push(name);
})

console.log(result);

const fruitReducer = (acc, curr) => {
  const {name, category} = curr;
 
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(name);
  return acc;
}

const reduceOutput = items.reduce(fruitReducer, {});
console.log(reduceOutput, "reduceOutput")

// remove duplicates from array
const nums = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const uniqueNums = [];
nums.forEach((item) => {
  if (!uniqueNums.includes(item)) {
    uniqueNums.push(item)
  }
})



console.log(uniqueNums);

const uniqueNumsObj = {};
nums.forEach((item) => {
  uniqueNumsObj[item] = item;
})
console.log(Object.values(uniqueNumsObj));


const uniqueNumsReducer = (acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}
const uniquNumsUsingReduce = nums.reduce(uniqueNumsReducer, []);
console.log(uniquNumsUsingReduce);


const userList = [
  {
    name: "amit",
    age: 28
  },
  {
    name: "amitB",
    age: 8
  },
  {
    name: "amitC",
    age: 38
  },
  {
    name: "amitD",
    age: 17
  }
]

const userMinorMajorGrouping = {
  minor: [],
  adult: [],
}

const minorAduptReducer = (acc, curr) => {
  const {name, age} = curr;
  if (age < 18) {
    acc.minor.push(name)
  } else {
    acc.adult.push(name)
  }
  return acc;
}

const groupingByAge = userList.reduce(minorAduptReducer, {...userMinorMajorGrouping});
console.log(groupingByAge);

Array.prototype.myReduce = function(reducer, initalValue) {
  const araay = this;
  let result = araay[0];
  let init = 1;
  if (typeof initalValue !== "undefined") {
    result = initalValue;
    init = 0;
  }
  for (let i = init; i < araay.length; i++) {
    result = reducer(result, araay[i]);
  }
  return result;
}
const reduceSumCustom = list.myReduce(reducer, 1);
console.log(reduceSumCustom);

const groupingByAgeCustom = userList.myReduce(minorAduptReducer, {
  minor: [],
  adult: [],
});

console.log(groupingByAgeCustom);
