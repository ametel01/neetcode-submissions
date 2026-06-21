class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        num_set = set(nums)
        max_cons = 0
        for num in num_set:
            if num - 1 not in num_set:
                current_num = num
                current_cons = 1
                while current_num + 1 in num_set:
                    current_num += 1
                    current_cons += 1
                max_cons = max(max_cons, current_cons)
        return max_cons