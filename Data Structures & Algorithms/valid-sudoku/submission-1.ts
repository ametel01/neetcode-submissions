class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for (const row of board) {
            let result = this.checkLine(row)
            if (result === false) {
                return false;
            }
        }
        for (const row of this.getColumns(board)) {
            let result = this.checkLine(row)
            if (result === false) {
                return false;
            }
        }
        const boxes = this.getBoxes(board);
        for (const arr of boxes) {
            let result = this.checkLine(arr)
            if (result === false) {
                return false;
            }
        }
        return true;
    }

    checkLine(line: string[]): boolean {
        const seen = new Map<string, boolean>();
        for (const num of line) {
            if (seen.has(num)) {
                return false;
            }
            if (num !== '.') {
                seen.set(num, true); 
            }
        }
        return true;
    }

    getColumns(board: string[][]): string[][] {
        const cols: string[][] = [];

        for (let i = 0; i < 9; i++) {
            const col: string[] = [];
            for (let j = 0; j < 9; j++) {
                col.push(board[j][i]);
            }
            cols.push(col);
        }
        return cols;
    }


    getBoxes(board: string[][]): string[][] {
        const boxes: string[][] = [];

        for (let rowStart = 0; rowStart < 9; rowStart += 3) {
            for (let colStart = 0; colStart < 9; colStart += 3) {
                const box: string[] = [];
                
                for (let row = rowStart; row < rowStart + 3; row++) {
                    for (let col = colStart; col < colStart + 3; col++) {
                        box.push(board[row][col]);
                    }
                }
                boxes.push(box)
            }
        }
        return boxes;
    }
}
