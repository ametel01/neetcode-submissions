class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map<number, number>();

        for (let num of nums) {
            if (map.get(num) === 1) {
                return true;
            }
            map.set(num, 1);
        }
        return false;
    }
}
