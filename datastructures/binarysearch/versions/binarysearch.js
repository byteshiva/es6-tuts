
/**
*
* @param {number[]} nums
* @param {number} target
*
*/

const binarySearch = (nums, target) => {
    if( nums.length === 0) {
        return -1;
    }

    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if(nums[mid] === target) {
            return mid;
        }
        
        if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

export default binarySearch;

// binarySearch1([1,2,3,4,5], 5);
// 4
// binarySearch1([1,2,3,4,5,100,44], 2);
// 1
// binarySearch1([1,2,3,4,5,88,12], 5);
// 4
// binarySearch1([1,2,3,4,5,122,144], 133);
// -1
