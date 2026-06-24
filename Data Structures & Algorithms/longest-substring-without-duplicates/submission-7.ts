class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const l = s.length;
        if (l === 0) return l;
        const seen = new Set<string>();
        let max = 1;
        let i = 0;
        let j = 0;
        
        while (j < s.length) {
            const c = s[j];
            if (!seen.has(c)) {
                seen.add(c);
                const size = seen.size;
                max = size > max ? size : max;
                j++
            } else {
                const l = seen.size;
                max = l > max ? l : max;
                seen.clear();
                i++;
                j = i;
            } 
            // console.log(seen);
        }
        return max;
    }
}
