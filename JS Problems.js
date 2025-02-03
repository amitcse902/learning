// Generate Random Password for provided length
const generatePwd = (len)=>{
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const number = '0123456789';
    const symbol = '!@#$%^&*';
    let randomPwd=''
    let allcharData = albhabets+number+symbol;
    
     randomPwd += alphabets[Math.floor(Math.random()*alphabets.length)];
     randomPwd += number[Math.floor(Math.random()*number.length)];
     randomPwd += symbol[Math.floor(Math.random()*symbol.length)];
    
    for(let i= randomPwd.length; i < len; i++){
        randomPwd += allcharData[Math.floor(Math.random()*allcharData.length)];
    }
    return randomPwd;
}
console.log(generatePwd(8))

//Sort the array by putting 0 in last 
const arr = [0, 1, 111, 112, 21, 9,0, 8, 78]

function sortArr(arr) {
    const newList = [...arr];
    const filterNew = arr.filter((item)=>item ===0)
    const filterNewNonZ = arr.filter((item)=>item!==0)
    const filteredSort = filterNewNonZ.sort((a,b)=>a-b)
    const  newArr = [...filteredSort,...filterNew]
    
    return function sortArr(){
        return newArr;
    }
}

const sArr = sortArr(arr);
console.log(sArr());

// merged with unique array
let array1 = [1, 2, 3];
let array2 = [2, 3, 4];

let arrMerged = [...new Set([...array1, ...array2])]
console.log(arrMerged)

// find common values in both Array

const commonValue = (arr1,arr2)=>{
    const commonData = arr1.filter((item)=>{
        return arr2.includes(item)
    })
    return commonData;
}

console.log(commonValue(array1,array2));

//Flatten Array with  forEach

const input = [1, [2, 3, [4]], [5, 6, [7, 8]], 9, 10]
// expected output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const flattenArrWithForEach = (arr,res=[])=>{
 arr.forEach((item)=>{
     if(Array.isArray(item)){
         flattenArrWithForEach(item,res)
     }else{
         res.push(item)
     }
 })
    return res;
}
console.log(flattenArrWithForEach(input))

//Flatten Array with  for Loop
const flattenArrWithFor = (arr,res=[])=>{
 for(let i=0;i<arr.length;i++){
     if(Array.isArray(arr[i])){
         flattenArrWithFor(arr[i],res)
     }else{
         res.push(arr[i])
     }
 }
    return res;
}
console.log(flattenArrWithFor(input))

// Flatten Array with  Reduce
const flattenArrWithReduce = (arr) => {
  const fltArr = arr.reduce((acc, val) => {
    return Array.isArray(val) ? acc.concat(flattenArrWithReduce(val)) : acc.concat(val);
  }, []);
  return fltArr;
}
console.log(flattenArrWithReduce(input));

// Flatten Array with sorted value 
let array = [1,2,[3,4,[6,7]],[9,1,[3,6,7,[11]]],10,22,12];
//result = [1,2,3,4,6,7,9,10,11,12,22]
const flattenArr = (arr,res=[])=>{
    arr.forEach((item)=>{
    if(Array.isArray(item)){
        flattenArr(item,res)
    }else{
        res.push(item)
    }
    })
    const uniqArr = [...new Set(res)].sort((a, b) => a - b)
    return uniqArr
}
console.log(flattenArr(array))

// FlatttenArr with array method

const flattenArrMethod =(arr)=>{
    const sortedMArr = [...new Set(arr.flat(Infinity))].sort((a,b)=>a-b)
    return sortedMArr
}
console.log(flattenArrMethod(array))

// ara[2,4,3] => 342
function getNumberFromDigits(digits) {
  let num = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    num += digits[i] * getPow(10, i);
  }
  return num;
}
function getPow (base, pow) {
  let num = 1;
  for (let i = 0; i < pow; i++) {
    num *= base;
  }
  return num
}

console.log(getNumberFromDigits([2,4,3])) //342

const users = [
  {
    id: 1,
    name: "Alice",
    age: 30,
    isActive: true,
  },
  {
    id: 2,
    name: "Bob",
    age: 25,
    isActive: false,
  },
  {
    id: 3,
    name: "Charlie",
    age: 35,
    isActive: true,
  },
];

const updatedUser = users.map((item) => {
  if (item.isActive) {
    return {
      ...item,
      address: {
        country: "india",
        state: "delhi",
        zipcode: 110054,
      },
      hobbies: ["a", "b", "c"],
    };
  } else {
    return item;
  }
});

console.log(updatedUser);

users.forEach((item) => {
  if (item.isActive) {
    const data = {
      ...item,
      address: {
        country: "india",
        state: "delhi",
        zipcode: 110054,
      },
      hobbies: ["a", "b", "c"],
    };
    console.log(data);
  } else {
    console.log(item);
  }
});

// const users = [
//   {
//     id: 1,
//     name: 'Alice',
//     age: 30,
//     isActive: true,
//     address:{
//       country:'india',
//       state: 'delhi',
//       zipcode:110054
//     },
//     hobbies: ['a', 'b', 'c']
//   },
//   {
//     id: 2,
//     name: 'Bob',
//     age: 25,
//     isActive: false
//   },
//   {
//     id: 3,
//     name: 'Charlie',
//     age: 35,
//     isActive: true,
//     address:{
//       country:'india',
//       state: 'delhi',
//       zipcode:110054
//     },
//     hobbies: ['a', 'b', 'c']
//   }
// ];


const str = 'Welcome to HCLTech'

const reverseString = (str)=>{
    const arr = str.split(' ');
    const newStr = arr.map((item)=>{
        const list = item.split('').reverse().join('')
        return list
    })
    return newStr.join(' ')
}
console.log(reverseString(str))
// with for loop 
function reverseEachWord(sentence) {
    let result = "";
    let wordStart = 0;
    for (let i = 0; i <= sentence.length; i++) {
        if (i === sentence.length || sentence[i] === ' ') {
            // Reverse the word manually
            for (let j = i-1; j >= wordStart; j--) {
                result += sentence[j];
            }
            if (i !== sentence.length) result += ' '; // Preserve spaces
            wordStart = i + 1; // Move to the next word
        }
    }
    return result;
}
// Test case
let inputText = "Welcome to HCLTech";
let outputText = reverseEachWord(inputText);
console.log(outputText);

// second largest number
const arr = [10, 20, 4, 99, 99, 45,67];
 const findSecondLargest = (arr)=>{
     let firstLargest = -Infinity;
    let secondLargest = -Infinity;
     for(let num of arr){
         //console.log(`"num: " ${num},"firstLargest: "${firstLargest},"secondLargest: "${secondLargest}`)
         if(num>firstLargest){
             secondLargest = firstLargest;
             firstLargest = num
         } else if(num>secondLargest && num <firstLargest){
             secondLargest = num
         }
     }
     return secondLargest;
 }
 console.log(findSecondLargest(arr))

// second Smallest number
const findSecondSmallestNumber = (arr)=>{
    let firstSmallest = Infinity;
    let secondSmallest = Infinity;
    for(let num of arr){
        if(num<firstSmallest){
            secondSmallest=firstSmallest
            firstSmallest=num;
        } else if(num<secondSmallest && num>firstSmallest){
            secondSmallest = num;
        }
    }
    return secondSmallest;
}

console.log(findSecondSmallestNumber(arr))

//write a function that will contain an array of integers and returns a new array with only the unique elements. You are not allowed to use any inbuilt function

const arr = [7, 8, 8, 9, 10, 7, 10];
const uniqArr =(arr)=>{
    const uniqList = [];
    for(let i =0;i<arr.length;i++){
    if(!uniqList.includes(arr[i]))
       uniqList.push(arr[i]);
    }
    return uniqList
}
console.log(uniqArr(arr))
