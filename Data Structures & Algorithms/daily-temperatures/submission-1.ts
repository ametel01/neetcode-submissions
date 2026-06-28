class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const out: number[] = [];
        let i = 0;
        let j = 1;


        const stack: number[] = [];
        while (i < temperatures.length) {
            if (temperatures[j] <= temperatures[i]) {
                stack.push(temperatures[j]);
                j++
            } else if (j === temperatures.length) {
                out.push(0);
                stack.length = 0;
                i++;
                j = i + 1;
            } else {
                i++;
                j = i + 1;
                console.log('out push', stack.length + 1);
                out.push(stack.length + 1);
                stack.length = 0;
            }
        }
        return out;
    }
}
