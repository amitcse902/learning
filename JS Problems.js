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

