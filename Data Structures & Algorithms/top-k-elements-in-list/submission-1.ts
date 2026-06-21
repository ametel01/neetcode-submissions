class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freq = new Map<number, number>();

        for (const num of nums) {
            if (!freq.has(num)) {
                freq.set(num, 1);
            } else {
                freq.set(num, freq.get(num) + 1)
            }
        }
        const sortedFreq = new Map(Array.from(freq.entries()).sort((a,b) => b[1] - a[1]));
        return Array.from(sortedFreq.keys()).slice(0, k);
    }
}
