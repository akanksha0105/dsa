const removeDuplicates = (nums) => {
	let x = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[x] < nums[i]) {
			x++;
			nums[x] = nums[i];
		}
	}
	return x + 1;
};
