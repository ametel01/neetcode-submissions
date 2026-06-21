class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        i = 0
        j = 1
        while i < len(numbers):
            if j == len(numbers) -1:
                j = 0
                i+=1
            if numbers[i] + numbers[j] == target and i != j:
                if i < j:
                    return [i+1, j+1]
                else:
                    return [j+1, i+1]
            else:
                j+=1


        