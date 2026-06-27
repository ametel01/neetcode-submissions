class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const l = matrix[0].length;
        let r = 0;

        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][l-1] < target) {
                continue
            } else {
                if (matrix[i].includes(target)) return true;
            }
        }
        return false;
    }
}
