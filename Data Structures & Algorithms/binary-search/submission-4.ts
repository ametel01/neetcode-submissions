class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;

        while(l <= r) {
            let k = Math.floor((l + r) / 2);
            let e = nums[k];
            if (e > target) {
                r = k - 1;
            } else if (e < target) {
                l = k + 1;
            } else {
                return k;
            }
        }
        return - 1;
    }
}
