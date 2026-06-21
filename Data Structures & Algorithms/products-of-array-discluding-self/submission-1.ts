class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = [];
        let i = 0;

        while (i < nums.length) {
            let prod = 1;
            let arr = nums.filter((_, j) => j !== i);
            for (let num of arr) {
                prod *= num;
            }
            result.push(prod);
            i++;
        }
        return result;
    }
}
