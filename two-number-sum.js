function twoNumberSum(array, targetSum) {
  // Iterate through the given array using nested for loops to find if target sum is present
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[i] + array[j] === targetSum && array[i] !== array[j]) {
				return [array[i], array[j]]
			}
		} 
	} return [];
}
