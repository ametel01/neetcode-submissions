class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const l = s1.length;
        let i = 0;
        const s = s1.split('').sort().join('');
        console.log('s', s);
        while (i <= s2.length - l) {
            let sub = s2.slice(i, i + l).split('').sort().join('');
            console.log('sub', sub);
            if (sub === s) {
                return true;
            }
            i++;
        }
        return false;
    }
}
