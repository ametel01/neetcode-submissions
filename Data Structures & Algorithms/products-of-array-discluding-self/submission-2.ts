class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = [];
        let i = 0;

        while (i < nums.length) {
            let j = i - 1;
            let prod = 1;
            while (j >= 0) {
                prod *= nums[j];
                j--;
            }
            result[i] = prod;
            i++;
        }
        console.log(result);
        i = 0;
        while (i < nums.length) {
            let j = i + 1;
            let prod = result[i];
            while (j < nums.length) {
                prod *= nums[j];
                j++;
            }
            result[i] = prod;
            i++;
        }
        return result;
    }
}
