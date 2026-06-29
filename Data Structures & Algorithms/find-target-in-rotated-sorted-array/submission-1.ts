class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let i = 0;
        while (i <= nums.length - 1) {
            if (nums[i] === target) return i;
            i++;
        }
        return - 1;
    }
}
