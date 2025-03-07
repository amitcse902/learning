Interview Questions-
React - 
1. Explain PureComponent with Example
2. React Life Cycle in Functional Component Explain useEffect Hook
3. Reconciliation
4. useReducer
5. useContext
6. Explain Redux.
7. output of code 
  import { useState } from 'react';
  export default function Counter() {
    const [counter, setCounter] = useState(5);
    return (
    <>
      <span>{counter}</span>
      <button onClick={() => {
      setCounter(counter => counter + 5);
      setCounter(counter => counter + 5);
      alert(counter);
      setCounter(counter => counter + 5);
      setCounter(counter => counter + 5);
      }}>Increment</button>
    </>
    )
  }
8. Explain HOC
9. What are refs in React?
10. forwardRefs in React? 
11. what is Controlled Component
12. Explain useMemo & useCallBack   

Javascript -

1. Scope Chaining
2. difference between Object.freeze() & Object.assign() 
3. difference between Shallow Copy & Deep Copy 
4. Event Looping
5. Explain Promise with Example
6. output of code -
  var a = 5;
  (function() {
  console.log(a);
  var a = 10;
  })();

7. output of code - 
  function test() {
  console.log(a);
  var a = 10;
  console.log(a);
  }
  test();
8. Explain Generator Function with example
    function* multi(){
      for(let i=1;i<6;i++){
        yield i;
      }
    }

    const gen= multi();
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
 
9.   Explain weakmap 
10. Difference between for of & for in 
11. Difference between foreach & map
12. Explain Destructuring & difference between spread & rest operator with example
13. Explain call, apply, bind 

Interview 

1. Redux
2. Redux toolkit
3. hooks
4. local storage, web storage
5. promises
6. let var const
7. hoisting
8. routing
9. event loop
10. controlled and uncontrolled component
11. closure
12. foreach
13. map
14. filter
15. reduce
16. context
17. life cycle methods
18. and real time scenario based questions
 a. function test() {
    let a = "Hello";
   
    if (true) {
      let a = "Hi";
      console.log(a)
    }
    console.log(a)
  }
  test() // output- "Hi", "Hello"
 
 b. function test() {
     var a = "Hello"
     let b = "Bye";
     if (true) {
       let a = "Hi";
       var b = "GoodBye"
       console.log(a)
       console.log(b)
     }
  }
  test() //output - its error 
 
c. function a() {
    for (var i = 0; i < 3; i++) {
      setTimeout(function log() {
      console.log(i)
      }, i * 1000)
    }
  }
  a(); //output - 3,3,3

Interview  L1, CI :
 
1. Accessibility,
2. Testing library,
3. State management context,
4. Some react hooks, 
5. Class based and functional based component
4. Custom hooks,
5. UX designing,
6. some basics of MUI
7. react lifecycle.
8. context api,
9. What are closures.
10. Working experience in past projects.
 
 
Interview L1, L2 :
 
1. Http methods.
2. Any experience on e commerce product.
3. Experience on any payment gateways, stripe flow,
4. Node js architecture, 
5. JWT authentication.
6. Sequelize configuration and usage,
7. Some scenario based questions on database relation.
8. Some knowledge about RSA, HMAC algorithm.
9. Sequelize transaction.
10. Event loop,
11. Methods of promises, (promise.all , any, race etc) and async await.
12. Built in modules available in node js.
13. Error handling in node js and returning the proper json message to response.
14. Rate limiting in api,
15. pool in database connection.
16. Hands on knowledge if any on PHP, WooCommerce, shopify, magento.


#  interview

1. Difference b/w var, let and const.
2. Hoisting in JavaScript.
3. What are different ES6 features ?
4. What are Arrow functions ?
5. How to handle errors in React ?
6. API Interceptors.
7. Explain VirtualDOM. (something about fibers)
8. How to handle API errors globally.
9. How to handle different screen sizes using CSS
10. Accessibility
11. Unit Testing
12. Redux and useContext API, when to use which?
13. Practical test to display output in given format.
14. Event Loop
15. Destructuring
16. Deep vs Shallow copy


interview Questions:

Explain five ES6 Features and why would you use it?
Implement Promise and it's error handling.
Implement Asyc and await method.
Difference between function and arrow function?
What is Virtual Dom.
What are React features?
Context API vs Redux?
Diff between useMemo and useCallback?
Other hooks in React?
What is RTK?
Benefits of RTK over redux?
What is Query hook?
What is Mutation hook? 
Implement a custom hook called useFetch that takes a URL as an argument and returns the fetched data, loading status, and any error that might occur during the API request.  
How to handle API fetch request every time from server rather than caching?
Which method is used to automatically bind multiple action creators to dispatch function?
How would you debug a component which is rendering multiple times on load of an application?
Implement a React component in TypeScript that renders a list of 1,000,000 items from a large JSON object. Use techniques like lazy loading, virtualization, or memoization to optimize the rendering and ensure smooth performance.


interview Questions:
 
1.How you have provided theme support in your application
2.How to make page responsive
3.Difference between display:none and visibility:hidden
4.Closures
5.difference between usememo and usecallback
6.Can we use settimeout with plain javascript(without using node)
7.Difference between normal function and arrow function
8.what will be the output of below code:
  for(let i=0; i<5; i++){
    setCounter(counter+1);
    setCounter1(prev=>prev+1)
  }
 
9.what will be the output of below code:
function normalFunc(){
    console.log("This in normal function",this)
  }
  const arrowFunc=()=>{
    console.log("This in arraow function",this)
  }

 
10.Write a program to reverse array, without using inbuilt function and new array

#
 1. Versions of React you have worked on and features of latest React version you have worked with? 
 2. All the hooks that you have used.
 Explain when to use useCallback. 
 3. How to manage state in React? 
 4. Custom hooks. Why use it? 
 5. What CSS preprocessors you have worked on? 
 6. Redux related questions. 
 7. Use of effects in Saga middleware. 
 8. Which library have you used for testing? Some basic questions. 
 9. Positions in CSS 
 10. Grid vs Flex 
 11. Semantic elements 
 12. JS questions ---------------- 
 var a = [] 
 function test(b) 
 { a.push(b) return b } 
 var a = [1,2,3] 
 var b = a
 b.push(4) 
 console.log(a) 
 ----------------
 let i;  
 for (i = 0; i < 3; i++) {
 const log = () => {     
 console.log(i); }
 setTimeout(log, 100); 
 }
 ---------------------- 
 var obj = {
 a: “John”,
 fun1: function () {
 console.log(this)    }
 } 
 obj.fun1() 
 ----------------- 
 var obj = { 
 a: “John”,
 fun1: () => {
 console.log(this)
 } 
 } 
 obj.fun1() 
 -------------------- 
 13. Create a timer/stopwatch using react.
 
 
 Higher Order Component 
 2. Render Method 
 3. Component Life Cycle Class Based 
 4. State and Props in class based components 
 5. Create Action for Given Reducers 
 6. Find distance between two character in a string(excluding space)
 
 #
 
Q1. Difference between let, var and const.
Q2. // Get output 1,2 without using let.
for(var i=0; i<=2; i++){
    setTimeout(function(){console.log(i)}, 1000);
}
Answer::
function print(i){
    setTimeout(function(){console.log(i)}, 1000)
}

for(var i=0; i<=2; i++){print(i)}

Q3. Types of copy (Shallow vs Deep)
Q4. map vs filter
Q5. Prototype and how it works?
Q6. Arrow function and advantages of arrow function
- Don't have this scope. Closer parent will have access. If no then target to global. No argument objects, use rest operator, Arrow functions are not hoisted. 
Q7. When we use bind VS call apply and bind
Q8. Difference between spread and rest operator.
Q9. //Get second last element from array. 

let arr = ["a", "b", "c", "d", "e", "f"];
output = "e"

console.log(arr[arr.length-2]);

Q10. Output?
console.log(3+"3")
console.log(3-"3")

Q11 NodeJS Middleware? 

Q12 React Element vs Component

Q13 What are pure components? 

Q14 What are refs in React?

Q15 forwardRefs in React?

Q16 React Virtual DOM

Q17 Intereceptor :: Intercept request and response before going to backend. Eg, Strictly check API before going to backend. Part of middleware. Depends upon status responses we can do some navigation

Q18 React fibre?

Q19. React lifecycles? 

Q20 In which case you will use HOC? :: 

Q21 Lazy loading ?

Q22 How to manage nested routes in terms of role based routing?

Q23 Ask to interview :: What are roles, project etc.

// reduce grouping 

  const input = [
    {name: "alok", age: 30},
    {name: "binit", age: 32},
    {name: "amit", age: 30}
];
//one way 

// Create a Map to group names by age
const ageMap = new Map();

input.forEach(({name, age}) => {
    if (!ageMap.has(age)) {
        ageMap.set(age, []);
    }
    ageMap.get(age).push(name);
});
// Convert the Map to the desired output format
const output = Array.from(ageMap, ([age, names]) => ({ [age]: names }));
console.log(output);

// another way 
const outputData = input.reduce((acc, {name, age}) => {
    const ageGroup = acc.find(group => group[age]);
    if (ageGroup) {
        ageGroup[age].push(name);
    } else {
        acc.push({ [age]: [name] });
    }
    return acc;
}, []);

console.log(outputData)



// count the string character 

let myString = 'amit kumar vishwakarma';
let result = {};
for (let str of myString) {
  result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
}
console.log(result);

------

 output:
function nestedArray(arr) {
    let maxNo = -Infinity;
 
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          let nestedMaxNo = nestedArray(arr[i]);
          if(nestedMaxNo > maxNo) {
             maxNo = nestedMaxNo;
          }

        } else if (typeof arr[i] === 'number') {
            if (arr[i] > maxNo) {
                maxNo = arr[i];
            }
        }
 
    }
    return maxNo;
}
 
// output 
const nestArray = [3, [5, [7,2],[8,4]],1,[9, [6]]];
const maxNumber = nestedArray(nestArray);
console.log("the biggest number in the nestArray", maxNumber);

const nestArray = [3, [5, [7,2],[8,4]],1,[9, [6]]];
 
let t=nestArray.toString().split("[");
let arr=t[0].split(",");
let res=arr.map((r)=>parseInt(r));
console.log("Max value is", Math.max(...res))  

--

function func(arr){
  let  res=[]
  let max=0;
  for(let i=0; i <arr.length; i++){
    if(Array.isArray(arr[i])){
      res=res.concat(func(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  for(let ele of res){
    if(ele > max){
      max = ele;
    }
  }
  return max
}
console.log(func([3, [5, [7,2],[8,4]],1,[9, [6]]]));

------
let items ="amitkumar"
let vol = ["a","i","e","o","u"];
let count =0
for(let i=0 ; i<items.length;i++){
    //console.log(i)
    if(vol.includes(items[i])){
        count++;
        console.log(items[i]);
    }
    
}


for(let key of items ){
    console.log(key);
    // if(vol.includes(item)){
    //     count++;
    //   // console.log(item);
    // }
}

for(let key in items) {
    console.log(key,items[key])
}
------
console.log(5.0 == 5.01)
 
console.log(1 == 1.0)
 
console.log(undefined == null)
 
console.log(undefined === null)
 
console.log(typeof null)
 
console.log(true + 6)
 
const clothes = ['jacket', 't-shirt'];

clothes.length = 0;

console.log(clothes[0])
 
//write code for Count Character in string
 
const arr2 = [1, 2, 3, 4, 5]

arr2[2] = 7
 
console.log(arr2)

["abc","pk",1,2,3,"abc","xyz"]
-----------------------------
Task
----------------------------
Application for Milk Man (Mobile first approach)
# React + typescript
# all hooks concept
# reusbale component
# initial stage creating everything by mockjson
# redux toolkit
# custome hooks
1) use firebase authentication
2) New customer addition form
  - Name *
  - Address *
  - Phone no (mainly whatsapp) *
  - email *
  - milk type multi select dropdown(cow / buffalo) *
  - QUantity (ltr)
  - Rate (drop down auto populate based on milk type)
  - Delievery tiiming *
 
3) Monthly calendar for every customer
4) On everyday delievery he select the date and check yes or no (popup confirmation for delievry with yes no button) 
(if delievered check "yes" if not then "no", whatever selection notificatoin goes to customer either msg or whatsapp)
5)Bill genratation for everymonth based on delievery (bill should have also highlight the total delievery dates and missing date) 
(bill send via whatsapp and also take a print option)
6) Showcasing the list of customer active/inactive
7)maintain a active/inactive state
8) Ability to deleted the inactive customer from list
-----------------------------------------------
const str = 'xxxyyyzzzea';
const strdata = str.split('')
const data = strdata.filter((item,index,arr)=>{
    return index ===0 || item !== arr[index-1]
})
console.log(data.join(''))

 const arr = [1,2,3,4,5,6,7,8,9,29,1,3,8,9];
 const convertArr=(arr)=>{
 const res=[];
 for(let i=0;i<arr.length;i+=2){
     //console.log(i+1,arr[i],arr[i+1])
     if(i+1<arr.length || !res[i] && arr[i] && arr[i+1]){
         res.push([arr[i],arr[i+1]])
     }else {
         res.push([arr[i]])
     }
 }
return res   
 }
 console.log(convertArr(arr))
 
 
 function removeConsecutiveDuplicates(s) {
    // Initialize the result string and an object to keep track of the last character
    let result = '';
    const lastChar = { value: '' };

    // Iterate over each character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // Add the character to the result if it's different from the last character
        if (char !== lastChar.value) {
            result += char;
            lastChar.value = char;  // Update the last character
        }
    }

    return result;
}


function Xyz() {
    
console.log(x)
let x=20;
}
//console.log(Xyz())
 
//console.log({} == {})

const str = 'xyzzzza'
const removeFunction=(str)=>{
    const data = str.split('')
const stdata=data.filter((item,index,elem)=>{
    return item ===0 || item !== elem[index-1]
    })
return stdata.join('')
}
 console.log(removeFunction(str)) 
 
 function removeConsecutiveDuplicates(s) {
    // Convert the string to an array of characters
    const chars = s.split('');

    // Use the filter method to keep only the unique consecutive characters
    const filteredChars = chars.filter((char, index, arr) => {
        return index === 0 || char !== arr[index - 1];
    });

    // Join the filtered array back into a string
    return filteredChars.join('');
}

// Example usage
const inputStr = 'xxxyyyzzzea';
const outputStr = removeConsecutiveDuplicates(inputStr);
console.log(outputStr);
 

function removeConsecutiveDuplicates(s) {
    // Initialize an empty object to keep track of the last character added
    const lastChar = { value: '' };
    
    // Use the reduce method to accumulate the result string
    const result = s.split('').reduce((acc, char) => {
        if (char !== lastChar.value) {  // Only add if the current character is different from the last one
            acc += char;
            lastChar.value = char;  // Update the last character
        }
        return acc;
    }, '');

    return result;
}
 

function findDistanceBetweenChars(s, char1, char2) {
    // Remove spaces from the string
    const filteredString = s.replace(/\s+/g, '');

    // Find the first and last index of char1 and char2
    const index1 = filteredString.indexOf(char1);
    const index2 = filteredString.indexOf(char2);

    // If either character is not found, return -1 (indicating not found)
    if (index1 === -1 || index2 === -1) {
        return -1;
    }

    // Return the absolute distance between the two characters
    return Math.abs(index1 - index2);
}

// Example usage
const inputStr = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
const char1 = 'b';
const char2 = 'y';
const distance = findDistanceBetweenChars(inputStr, char1, char2);
console.log(distance);  // Output: 23

-----------------------------------------------
import React, { useReducer } from "react";
import ReactDOM from "react-dom";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);


************************************************
str='xxxyyyzzzzaaa'
const removeDuplicate=(str)=>{
    const data=str.split('');
    const remData =data.filter((item,index,arr)=>{
        return (index===0 || item!==arr[index-1])
    })
    return remData.join('')
}

//console.log(removeDuplicate(str))


const arr=[1,2,3,4,5,6,7,8]
const modified =(arr)=>{
    const res=[]
    for(let i=0;i<arr.length;i+=2){
     if(i+1<arr.length){
         res.push([arr[i],arr[i+1]])
     }else {
         res.push([arr[i]])
     }
    }
    return res
}

//console.log(modified(arr))

const arrdata = [1,2,4,3,4,4,5,4,3,5,6,7,6,8,7,6,5,4]
const duplicateData =(arrdata)=>{
    const duplItem=[];
    const unique=[];
    for(let i=0;i<arrdata.length;i++){
        if(unique.includes(arrdata[i])){
            duplItem.push(arrdata[i])
        }else {
            unique.push(arrdata[i])
        }
    }
    if(duplItem.length>0){
        return duplItem
    }
}

console.log(duplicateData(arrdata))

-----------------------------------
import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(5);
  return (
    <>
      <span>{counter}</span>
      <button onClick={() => {
        setCounter(counter => counter + 5);
        setCounter(counter => counter + 5);
        alert(counter);
        setCounter(counter => counter + 5);
        setCounter(counter => counter + 5);
      }}>Increment</button>
    </>
  )
}




const num =[1,2,3,4,5,6]
const {num1,num2,...number} = num;
console.log(num1,num2,number)

const numa = [1,2,3,4,5]
const numd2 = [...numa];

function* func =()=>{

  for(let i=0;i<5;i++){

   yield i++
  }
}

const gen = func(1)

console.log(gen.next().value)

const promise = new Promise( (resolve)=>{
resolve => try{
.then('url')
.then((data)=>data.json())
.then((res)=>console.log(res))
}
}, (rejected)=>{
rejected => .catch((error)=>console.log(error))
})


var a = 5;
(function() {
console.log(a);
var a = 10;
})();

function test() {
console.log(a);
var a = 10;
console.log(a);
}
test();

function tet(){
console.log(a)
let a=4;
}
tet()

--------------------------------
const arr = [1,2,3,4,5,6,7,8]
// const res = []
// for(let i =0;i<4;i++){
//     res.push(arr[i]);
// }
// for(let j=4;j<arr.length;j++){
//     res.push('*')
// }

// console.log(res)


const newarr = [...arr.slice(0,4),'*','*','*','*']
//console.log(newarr)

  
 
 const str = 'amit kumar vishwakarma';
 const res ={} 
//  for(let key of str){
//      res[key] = res.hasOwnProperty(key)?res[key]+1:1
//  }
//  console.log(res) 
  


const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const fulldata = function(state,city){
    return (this.fullName()+" state:"+ state+" city:"+city)
}

// console.log(fulldata.call(person,"up","varanasi"))
// console.log(fulldata.apply(person,["up","varanasi"]))
// let fullName = fulldata.bind(person,"up","varanasi");
// console.log(fullName())



function* demo(n){
    for(let i=1;i<n;i++){
        yield i;
    }
}
const sn = demo(9);
// console.log(sn.next().value)
// console.log(sn.next().value)
// console.log(sn.next().value)
// console.log(sn.next().value)
// console.log(sn.next().value)
// console.log(sn.next().value)
// console.log(sn.next().value)
// console.log(sn.next().value)



const string = "xxyyzzyyasaa";
const arrdata = string.split('');
const data = arrdata.filter((item,index,arr)=> {
    return index === 0 || item !== arr[index-1]
    }
)

//console.log(data.join(''))
 

function multi(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}

//console.log(multi(4)(3)(5))


const dataArr = [1,2,3];
function sum(num1,num2,num3){
    return num1+num2+num3;
}

console.log(sum(...dataArr));
 
const sumdata =[...dataArr]
console.log(sumdata)



const strg = "amit kumar vishwakarma";
const resd={}
for(let key of strg){
    resd[key] = resd.hasOwnProperty(key)?resd[key]+1:1
}
console.log(resd)



function test(str){
    let splitStr = str.split('')
    let uniqueArr = [...new Set(splitStr)];
    return uniqueArr.join('')
}
 
let data = test('AABBAA')
console.log(data)



Input: [[Simth,20],[John,12],[Jones,20]]
Output:[[John,20],[Simth,20],[John,12]]
Sort based on score and if 2 scores are same then sort by alphabetical order.


const arr = [[Simth,20],[John,12],[Jones,20]];

-----------------------------------
let promsie = new Promise ((resolve)=>resolve("done"))
promise.then((result)=>alert(result))



function delay(ms){
return new Promise ((resolve)=>setTimeOut(resolve,ms))

}

delay(3000).then(()=>console.log("some element is show after 3 second"))



arrs = [1,2,3,5,3,5,6,7,8,9]

console.log(arrs.filter((item,index,arr)=>arr.indexOf(item)===index))




// shalow Copy
const shalowuser= {
    name:"amit"
}
const shalowdemouser =shalowuser
console.log(shalowuser,shalowdemouser)
//deep copy
const deepuser= {
    name:"amit"
}
const deepdemouser = JSON.parse(JSON.stringify(deepuser))
const depUser = Object.assign({},deepuser)
 
deepdemouser.name="alok"
 
depUser.name="arun"
 
console.log(deepuser,deepdemouser,depUser)

----------------------------------------------

//Shalow copy 
const obj = {name:"amit", age:30};
const newObj = obj;
newObj.name="alok"
newObj.age=32

console.log(obj,newObj)

//Deep Copy
const objd = {name:"amit",age:29}

const newObj2 = Object.assign({},objd);
const objdeep = JSON.parse(JSON.stringify(objd));

objdeep.name ="alok"
objdeep.age =30

newObj2.name ="arun"
newObj2.age =32

console.log(objd,objdeep,newObj2)

// console.log("start")
// function sum (){
//     setTimeout(()=>{console.log("hi")},200)
// }
// sum()
// console.log("end")


// useEfect(()=>{
//   reurn(()=>{
//   })
    
// },[count])

const arr = ["2", "3", "7", "7", "1", "5"]

const duplicate =()=>{
const duplItem = [];
const uniq = [];
for(let i=0; i<arr.length;i++){
    
if(uniq.includes(arr[i])){
    duplItem.push(arr[i])
}else {
    uniq.push(arr[i])
}
}
return uniq;    
}

//console.log(duplicate(arr));

const uniw = 
arr.filter((item,index,arr)=>arr.indexOf(item)===index)

//console.log(uniw)
 
 
 arrs = [1,2,3,5,3,5,6,7,8,9]

//console.log(arrs.filter((item,index,arr)=>arr.indexOf(item)===index))

const newArr = [...new Set(arrs)]
//console.log(newArr)

function delay(m){
    return new Promise ((resolve)=>setTimeout(resolve,m)) 
}

const newd = delay(3000)
.then(()=>console.log("this will print after 3 sec")) 
console.log(newd)


***************************
var x = 5;
x = "Hello";
console.log(x);

let a; 
console.log(a);


let arr = [1, 2, 3];
arr[10] = 5;
console.log(arr);
console.log(arr.length);


let arr = [1, 2, 3];
arr.push(4)
console.log(arr)
arr.unshift(0)
console.log(arr)
//console.log(arr.slice(1,4))
arr.splice(2,0,2)
console.log(arr)
 arr.splice(0, arr.length);
 console.log(arr)
 
 console.log(0.1 + 0.2 === 0.3);
 
 
 
 const obj = {
 name: 'John',
 getName: function() {
  return this.name;
 },
};
const getName = obj.getName;
console.log(getName());
console.log(obj.getName());


let a = 10;
(function() {
 console.log(a); 
 let a = 20;
})();


class Animal {
 makeSound() {
  console.log("Animal Sound");
 }
}

class Dog extends Animal {
    makeSound() {
    super.makeSound()
    console.log("Bark");
 }
}
const dog = new Dog();
dog.makeSound();

let a = false || 0 || null || 'Hello';
console.log(a);
 
for (let i = 0; i < 5; i--) {
 console.log(i);
}


const obj1 = { a: 10 };
const obj2 = obj1;
obj2.a = 20;
console.log(obj1.a);


const p = new Promise((resolve, reject) => {
 console.log('Promise initialized');
 resolve('Success');
});
p.then((result) => console.log(result));
console.log('After Promise'); 
----------------------------------
var x = 5;
x = "Hello";
console.log(x);

let a; 
console.log(a);


let arr = [1, 2, 3];
arr[10] = 5;
console.log(arr);
console.log(arr.length);


let arr = [1, 2, 3];
arr.push(4)
console.log(arr)
arr.unshift(0)
console.log(arr)
//console.log(arr.slice(1,4))
arr.splice(2,0,2)
console.log(arr)
 arr.splice(0, arr.length);
 console.log(arr)
 
 console.log(0.1 + 0.2 === 0.3);
 
 
 
 const obj = {
 name: 'John',
 getName: function() {
  return this.name;
 },
};
const getName = obj.getName;
console.log(getName());
console.log(obj.getName());


let a = 10;
(function() {
 console.log(a); 
 let a = 20;
})();


class Animal {
 makeSound() {
  console.log("Animal Sound");
 }
}

class Dog extends Animal {
    makeSound() {
    super.makeSound()
    console.log("Bark");
 }
}
const dog = new Dog();
dog.makeSound();

let a = false || 0 || null || 'Hello';
console.log(a);
 
for (let i = 0; i < 5; i--) {
 console.log(i);
}


const obj1 = { a: 10 };
const obj2 = obj1;
obj2.a = 20;
console.log(obj1.a);


const p = new Promise((resolve, reject) => {
 console.log('Promise initialized');
 resolve('Success');
});
p.then((result) => console.log(result));
console.log('After Promise');


// //Shalow copy 
// const obj = {name:"amit", age:30};
// const newObj = obj;
// newObj.name="alok"
// newObj.age=32

// console.log(obj,newObj)

// //Deep Copy
// const objd = {name:"amit",age:29}

// const newObj2 = Object.assign({},objd);
// const objdeep = JSON.parse(JSON.stringify(objd));

// objdeep.name ="alok"
// objdeep.age =30

// newObj2.name ="arun"
// newObj2.age =32

// console.log(objd,objdeep,newObj2)

// // console.log("start")
// // function sum (){
// //     setTimeout(()=>{console.log("hi")},200)
// // }
// // sum()
// // console.log("end")


// // useEfect(()=>{
// //   reurn(()=>{
// //   })
    
// // },[count])

// const arr = ["2", "3", "7", "7", "1", "5"]

// const duplicate =()=>{
// const duplItem = [];
// const uniq = [];
// for(let i=0; i<arr.length;i++){
    
// if(uniq.includes(arr[i])){
//     duplItem.push(arr[i])
// }else {
//     uniq.push(arr[i])
// }
// }
// return uniq;    
// }

// //console.log(duplicate(arr));

// const uniw = 
// arr.filter((item,index,arr)=>arr.indexOf(item)===index)

// //console.log(uniw)
 
 
//  arrs = [1,2,3,5,3,5,6,7,8,9]

// //console.log(arrs.filter((item,index,arr)=>arr.indexOf(item)===index))

// const newArr = [...new Set(arrs)]
// //console.log(newArr)

// function delay(m){
//     return new Promise ((resolve)=>setTimeout(resolve,m)) 
// }

// const newd = delay(3000)
// .then(()=>console.log("this will print after 3 sec")) 
// console.log(newd)

// hello();//error
 
// const hello= () => {   console.log("Hello!"); };

hello();
 
function hello() {   console.log("Hello!"); }

-------------Virtual DOM/Real DOM
Reconcilation
React Feature
server side rendering /client side rendering
Control and uncontroled Component
unidirectional 
PropTypes
HOC
stict mode
 
hooks 
router
usecontext


https://stackblitz.com/edit/react-pluanc?file=src%2FApp.js,src%2FuseFetchData.js,src%2FComponet1.js

const arr = [1, 2, 3, 4, 5, 6,7];
const n = 3;

const shiftedArr =(arr,n)=>{
    for(let i=0;i<=n;i++){
        const firstElm=arr[0];
        for(let j=0;j<arr.length-1;j++){
            arr[j]=arr[j+1];
        }
        arr[arr.length-1]=firstElm
    }
return arr;
} 

console.log(shiftedArr(arr,n))





const inputArr = ["apple", "banana", "orange", "apple", "orange", "banana", "banana"];

const countFruits = (arr) => {
    return arr.reduce((acc, fruit) => {
        acc[fruit] = (acc[fruit] || 0) + 1;
        return acc;
    }, {});
};

const output = countFruits(inputArr);
console.log(output);

-------------------------------
const inputArr = ["apple", "banana", "orange", "apple", "orange", "banana", "banana"];
//output: {  apple: 2, banana: 3,orange: 2 }
// const modifiedArr = (inputArr)=>{
//     const data = inputArr.reduce((acc, fruit) => {
//         if(acc[fruit]){
//             acc[fruit] +=1
//         }else {
//             acc[fruit]=1
//         }
//         return acc;
//     }, {});
//     return data
// }

 const modifiedArr = (inputArr)=>{
    
const fruitCount = inputArr.reduce((acc, fruit) => {
    acc.set(fruit, (acc.get(fruit) || 0) + 1);
    return acc;
}, new Map());
//console.log(fruitCount)
const result = Object.fromEntries(fruitCount);
//console.log(result);
     
    return result
}


console.log(modifiedArr(inputArr))


----------------
type IsString<T> = T extends string ? "Yes" : "No";
type Test1 = IsString<string>;
type Test2 = IsString<number>;
console.log(Test1);
console.log(Test2);


//Yes 
//No 



function identity<T extends number | string>(arg: T): T {
 return arg;
}
console.log(identity(5));
console.log(identity("hello"));
console.log(identity(true));


5
hello
undefinded


function multiply(a, b = 2) {
 return a * b;
}
console.log(multiply(5));
console.log(multiply(5, undefined));
console.log(multiply(5, null));


//10
//10
//10

To-Do List App
Features: Add, remove, and mark tasks as complete.
Key Concepts: State management, controlled components, event handling.

------------------------------
let str = "Hello";
console.log(str.charAt(1)); // "e"

let str = "Hello";
console.log(str.charCodeAt(0)); // 72 (Unicode for 'H')

let str1 = "Hello";
let str2 = " World";
console.log(str1.concat(str2)); // "Hello World"

let str = "Hello World";
console.log(str.includes("World")); // true

let str = "Hello World";
console.log(str.indexOf("o")); // 4

let str = "Hello World";
console.log(str.lastIndexOf("o")); // 7

let str = "Hello World";
console.log(str.slice(0, 5)); // "Hello"

let str = "Hello World";
console.log(str.split(" ")); // ["Hello", "World"]

let str = "Hello World";
console.log(str.toLowerCase()); // "hello world"

let str = "Hello World";
console.log(str.toUpperCase()); // "HELLO WORLD"

let str = "  Hello World  ";
console.log(str.trim()); // "Hello World"

let str = "Hello World";
console.log(str.replace("World", "JavaScript")); // "Hello JavaScript"

let str = "Hello ";
console.log(str.repeat(3)); // "Hello Hello Hello "

let str = "Hello World";
console.log(str.startsWith("Hello")); // true

let str = "Hello World";
console.log(str.endsWith("World")); // true

-------------
type IsString<T> = T extends string ? "Yes" : "No";
type Test1 = IsString<string>;
type Test2 = IsString<number>;
console.log(Test1);
console.log(Test2);


//Yes 
//No 



function identity<T extends number | string>(arg: T): T {
 return arg;
}
console.log(identity(5));
console.log(identity("hello"));
console.log(identity(true));


5
hello
undefinded


function multiply(a, b = 2) {
 return a * b;
}
console.log(multiply(5));
console.log(multiply(5, undefined));
console.log(multiply(5, null));


//10
//10
//10

To-Do List App
Features: Add, remove, and mark tasks as complete.
Key Concepts: State management, controlled components, event handling.

--------------------------------------------
React Js interview based practical question..
 
const nums = [1,2,3,4,5,6,7];
nums.forEach((n) => {
    if(n%2 === 0) 
      break;
    console.log(n);
});
 
let a = true;
setTimeout(() => {
  a = false;
}, 2000)

while(a) {
  console.log(' -- inside whilee -- ');
}
 
inside while  
 
setTimeout(() => console.log(1), 0);
console.log(2);
new Promise(res => {
  console.log(3)
  res();
}).then(() => console.log(4));
console.log(5);
 
async function foo() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
  await new Promise(resolve => setTimeout(resolve, 0));
  console.log("C");
}
console.log("D");
foo();
console.log("E");
 
function sum(a=11, b=6) {
   return a+b;
}

// A

sum( 11, 2);
// B
sum(3);
// C
sum(undefined, 20);
// D
sum();

function mystery(...params) {
   return params;
}
let x = mystery(1, 2, 4);

what x will return ?
 
function* someGenerator({
   var n = 0;
   for(let i=0;i<10;i++){
     yield n++;
   }
}
var g = someGenerator();
g.next();
g.next();
console.log(g.next().value);
let x = 1;
if (x === 1) {
  let x = 2;
x = 3;
  console.log(x);
  // expected output: A
}
console.log(x);
// expected output: B
 
var b = 1;
function outer(){
     var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();
Webpack:
If you need maximum flexibility and customization for a large-scale application.
When you have legacy requirements or need to support older module formats.
Vite:
When you want a fast and simple development experience, especially for small-to-medium applications or projects with modern ES modules.
If you prefer a more modern and performant tool without the complexity of Webpack.
 
 
(function(){   var a = b = 3; })(); console.log("a defined? " + (typeof a !== 'undefined'));console.log("b defined? " + (typeof b !== 'undefined'));
 
function foo1()
{
  return {
      bar: "hello"
  };
}
 
function foo2()
{
  return
  {
      bar: "hello"
  };
}
 
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
 
[12,24,36,47,58,7,17,77]
[[12,24],[36,47],[58,7],[17,77]]

-------------------------------------
const obj = {
    name:"g",
    age:40,loc:"lop"
}
if(obj.name==='g' && delete obj.age && typeof obj.age==='undefined'){
    console.log(obj)
}
console.log()

// let s1 = Math.sign(546)
// console.log(s1)
// let list = "  mark, sd, jon, bol, brn  "
// console.log(list.trim())

// const empid=new Set();
// empid.add("1");
// empid.add("2");
// empid.add("3");
// empid.add("4");
// empid.add("7");
// empid.add("8");
// empid.add("9");
// let allid=""
// empid.forEach(function (value){
//     allid += value + " , ";
// })
// console.log(allid)

//console.log(new Date().getDay())

// function func(n){
//     res=0
//     while (n>10){
//         a=10
//         b= Math.floor(a*10/10)
//         res=res*b
//         res=res+Math.floor(n/a)
//         n/=10
//     }
//     return res
// }

// console.log(func(1462))
// let emp = [465216,748125,787465,89265,656546,153220]
// console.log(emp.sort(function(a,b){return 0.5 - Math.random()}))
// console.log(emp.sort(function(a,b){return b-a}))
// console.log(emp.sort(function(a,b){return a-b}))

// let list = "  mark, sd, jon, bol, brn  "
// console.log(list.trim()) 


mport { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  let [count, setCount] = useState(0);
  let [status, setStatus] = useState(false);

  useEffect(() => {
    let timer;
    if (status) {
      timer = setInterval(() => setCount(++count), 1);
    }
    return () => clearInterval(timer);
  }, [count, status]);
  const startHandler = () => {
    //setCount(++count);
    setStatus(true);
  };
  const resetHandler = () => {
    setCount(0);
  };
  const stopHandler = () => {
    setStatus(false);
  };
  return (
    <div className="App">
      <h1>Counter Timer</h1>
      <h2>Click on Start to start timer!</h2>
      <p id="counter">{count}</p>
      <button name="start" disabled={status && true} onClick={startHandler}>
        Start
      </button>
      <button name="stop" disabled={!status && true} onClick={stopHandler}>
        Stop
      </button>
      <button name="reset" disabled={status && true} onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
}


Explain what a higher-order component is. 
Explain what a mounted component is. 
Explain what useState is. 
Explain what an event is in React. 
What is a class component? 
What is a component? 
What is the difference between class and functional components? 
What is a state object? 
What is a props object? 
How are state objects different from props objects? 
Explain what MVC architecture is.  
Name an architectural difference between React and Angular. 
Explain what a controlled component is. 
Explain what an uncontrolled component is. 
How are controlled and uncontrolled components different? 
Explain what React Hooks are. 
Explain what three dots mean in React. 
What are package managers in React.js? 
Explain what prop drilling is. 
Explain what StrictMode is. 
Explain what the Shadow DOM is. 
Explain what the virtual DOM is. 
How is the Shadow DOM different from the virtual DOM? 
Explain what the React.js lifecycle methods are.  
Explain what a pure function is.  
Explain what JSX is. 
Explain what Flux architecture is. 
What are bundlers in React.js?

