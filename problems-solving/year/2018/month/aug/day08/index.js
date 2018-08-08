/**
* Backtracking Solution
*
* @param {number[]} num
* @return {number[][]}
*
*/

const subsets_backtracking = nums => {
    const results = [];
    backtracking(nums, 0, [], results);
    return results;
}


/**
* @param {number[]} nums
* @param {number} start
* @param {number[]} solution
* @param {number[][]} results
*/

const backtracking = (nums, start, solution, results) => {
    results.push(solution.slice());

    console.log('[ Enter for loop]-, i  nums', nums.length);
    for(let i = start; i < nums.length; i++) {
        solution.push(nums[i]);
        backtracking(nums, i + 1, solution, results);
        solution.pop();
    }
};



