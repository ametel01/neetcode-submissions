class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 100;
        let li = 0;
        let h = 0;
        let hi = 100;
        let b = 0;
        let s = prices.length - 1;
        while (s >= 0) {
            const pb = prices[b];
            const ps = prices[s]
            if ( pb < l && b < hi) {l = pb; li = b};
            if ( ps > h && s > li) {h = ps; hi = s};
            b++;
            s--;
        }
        const r = h > l ? h - l : 0;
        return r;
    }
}
