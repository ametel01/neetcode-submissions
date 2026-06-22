class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i = 0;
        let j = heights.length - 1;
        let max = 0;

        while (i < j) {
            let vol = (j-i) * Math.min(heights[i], heights[j]);
            if (vol > max) {max = vol};
            if (heights[i] > heights[j]) {
                j--
            } else {
                i++
            }
        }
        return max;
    }
}
