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
            const a = heights[i];
            const b = heights[j]
            const m = a < b ? a : b;
            let vol = (j-i) * m;
            if (vol > max) {max = vol};
            if (a > b) {
                j--
            } else {
                i++
            }
        }
        return max;
    }
}
