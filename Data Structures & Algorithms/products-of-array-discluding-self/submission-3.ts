class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = [];
        let i = 0;
        let running = 1;

        while (i < nums.length) {
            result[i]=running;
            running*=nums[i]
            i++;
        }
        i = nums.length - 1;
        running = 1;
        while (i >= 0) {
            result[i] *= running;
            running*=nums[i]
            i--;
        }
        return result;
    }
}
