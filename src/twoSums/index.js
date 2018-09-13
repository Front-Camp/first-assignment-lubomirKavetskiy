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
	for(let a=0; a<arr.length; a++) {
		for(let b=0; b<arr.length; b++) {
			if(a !== b && (arr[a] + arr[b]) === base) { 
				return [arr[a], arr[b]];
			};
		}
    }
};

export default twoSums;
