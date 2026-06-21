class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagrams = new Map<string, string[]>;
        
        for (let str of strs) {
            console.log(str);
            const sortedStr: string = str.split('').sort().join('');
            if (!anagrams.has(sortedStr)) {
                let anagramsArray = new Array();
                anagramsArray.push(str);
                anagrams.set(sortedStr, anagramsArray);
            } else {
                let anagramsArray = anagrams.get(sortedStr);
                anagramsArray.push(str);
                anagrams.set(sortedStr, anagramsArray);
            }
        }
        return Array.from(anagrams.values());
    }
}
