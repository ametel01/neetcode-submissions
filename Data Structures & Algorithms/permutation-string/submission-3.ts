class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s2.length === 1 && s1 === s2) return true;
        const l = s1.length;
        let i = 0;
        const s = s1.split('').sort().join('');
        while (i <= s2.length - l) {
            let sub = s2.slice(i, i + l).split('').sort().join('');
            if (sub === s) {
                return true;
            }
            i++;
        }
        return false;
    }
}
