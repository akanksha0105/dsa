const getConcatenation = function (nums) {
	let concatedArray = [];
	let n = nums.length;
	for (let i = 0; i < n; i++) {
		concatedArray[i] = nums[i];
		concatedArray[i + n] = nums[i];
	}

	return concatedArray;
};
