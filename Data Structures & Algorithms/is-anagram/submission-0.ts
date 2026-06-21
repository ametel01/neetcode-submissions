class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) return false;

        const map1 = new Map<string, number>();
        const map2 = new Map<string, number>();

        for (let char of s) {
            map1.set(char, (map1.get(char) || 0) + 1);
        }
        for (let char of t) {
            map2.set(char, (map2.get(char) || 0) + 1);
        }

        for (let [key, val] of map1) {
            let testVal = map2.get(key);
            if (testVal !== val || testVal === undefined) return false; 
        }

        return true;
    }
}
