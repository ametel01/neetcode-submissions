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
            if (e === target) return k;
            if (e < target) {
                l = k + 1;
            } else {
                r = k - 1;
            }
        }
        return - 1;
    }
}
