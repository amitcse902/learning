// polyfill of map 
Array.prototype.customMap = function (callbackFn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const val = callbackFn(this[i])
    result.push(val);
  }
  return result;
};

const arr = [1,2,3]
const arrData = arr.customMap((item)=>item*2)
console.log(arrData)

// Polyfill for forEach 
Array.prototype.customforEach = function(callbackFn){
    for(let i =0 ;i<this.length;i++){
        callbackFn(this[i]);
    }
}
const list = [1,2,3,4,5,6,7,8,9,10];
const result = []
list.customforEach((item)=>{
  result.push(item)
})
console.log(result);

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

//const list = [1,2,3,4,5,6,7,8,9,10];

function reducer (acc, curr) {
  return acc+ curr
}

const reduceSumCustom = list.customReducer(reducer, 1);
console.log(reduceSumCustom);

// PolyFill For Filter
Array.prototype.customFilter = function (callbackFn, thisArg) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      if (callbackFn.call(thisArg, arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
  }
  return result;
};

const filteredData = list.customFilter((item) => {
  return item % 2 === 0;
});
console.log(filteredData);

// Polyfill Promise All
Promise.myAll = function (promiseList) {
    const result = [];
    promiseList.forEach(promise => {
            promise()
            .then(data => {
                result.push(data)
            })
            .catch(err => {
                return Promise.reject(err)
            })
    })
    
    if (promiseList.length === result.length) {
        return Promise.resolve(result)
    }
}

