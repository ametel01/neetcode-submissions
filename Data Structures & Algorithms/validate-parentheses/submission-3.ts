class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length === 1) return false;
        const stack: string[] = [];

        for (let str of s) {
            if (str === '(' || str === '[' || str === '{') {
                stack.push(str);
            } else {
                if (stack.length === 0) return false;
                let top = stack.pop();
                if (top === '(') {
                    if (str !== ')') return false;
                } else if (top === '[') {
                    if (str !== ']') return false;
                } else {
                    if (str !== '}') return false;
                }
            }
        }
        return stack.length === 0;
    }
}
