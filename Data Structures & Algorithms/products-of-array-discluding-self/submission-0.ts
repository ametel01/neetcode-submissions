class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = [];
        const len = nums.length;
        let i = 0;

        while (i < len) {
            let prod = 1;
            let arr = nums.filter((_, j) => j !== i);
            console.log(arr);
            for (let num of arr) {
                prod *= num;
            }
            result.push(prod);
            i++;
        }
        return result;
    }
}
