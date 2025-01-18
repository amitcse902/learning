 // polyfill of map 
Array.prototype.myMap= function (callbackFn){
    const newList = [];
    for(let i=0; i < this.length ;i++){
        const val = callbackFn(this[i])
        newList.push(val)
    }
    return newList;
}
 
const arr = [1,2,3]
const arrMod = arr.myMap((item)=>item*2)
console.log(arrMod)
