class Solution:
    def isPalindrome(self, s: str) -> bool:
        arr = [char.lower() for char in s if char.isalnum()]
        return arr == arr[::-1]
        