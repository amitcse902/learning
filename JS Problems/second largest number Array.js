// second largest number
const arr = [10, 20, 4, 99, 99, 45, 67];
const findSecondLargest = (arr) => {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let num of arr) {
    //console.log(`"num: " ${num},"firstLargest: "${firstLargest},"secondLargest: "${secondLargest}`)
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest && num < firstLargest) {
      secondLargest = num;
    }
  }
  return secondLargest;
};
console.log(findSecondLargest(arr));
