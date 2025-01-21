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
