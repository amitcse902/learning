// second Smallest number
const findSecondSmallestNumber = (arr) => {
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;
  for (let num of arr) {
    if (num < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = num;
    } else if (num < secondSmallest && num > firstSmallest) {
      secondSmallest = num;
    }
  }
  return secondSmallest;
};

console.log(findSecondSmallestNumber(arr));
