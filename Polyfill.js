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
const arrData = arr.myMap((item)=>item*2)
console.log(arrData)

// Polyfill for reduce 
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
