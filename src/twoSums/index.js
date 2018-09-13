/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  let num = [];
  for(let i=0; i<arr.lenght; i++) {
    if(arr[i] < base) {
      num = num.concat(arr[i]);

      if((num[0] + arr[i]) == base) {
        return num = num.concat(arr[i]);
        break;
      }
    }
  }
  return num;
}

const twoSums = (arr, base) => {
  arr.reduce((a, b) => {
    if(a < base) {
      return (a + b) == base && [a, b];
    }
  });
}

export default twoSums;
