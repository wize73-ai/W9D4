# W9D4 Solving the Longest Consecutive Sequence Problem leetcode 128


Solving the Longest Consecutive Sequence Problem

 

Objective:

Enhance your coding skills by solving the Longest Consecutive Sequence problem on LeetCode and documenting your solution approach.

 

Problem Statement:

Solve the LeetCode problem: https://leetcode.com/problems/longest-consecutive-sequence/description/Links to an external site.

 

Steps to Complete the Exercise:

Understand the Problem:
   - Read the problem statement carefully.
   - Identify the inputs and expected outputs.
   - Understand the constraints and edge cases.

   Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 10^5
-109 <= nums[i] <= 109

Plan Your Approach:
   - Think about different strategies to solve the problem.
   - Choose the most efficient algorithm considering time and space complexity.
   - Sketch out your solution on paper or a whiteboard before coding.

      - create set from list - deduplicate

Write the Code:
   - Open your preferred coding environment.
   - Implement your solution in a clear and organized manner.
   - Use meaningful variable names and comments to explain your code.

Test Your Solution:
   - Test your code with various test cases, including edge cases.
   - Ensure your solution passes all test cases on LeetCode.

Document Your Solution:
   - Create a documentation file in PDF or Markdown format.
   - Explain your code design choices.

      I used python, as I am more comfortable with the environment.

   - Describe the hash functions used (if any).
   - Detail your approach and reasoning for solving the problem.

      simplify the num list into a set, then order the set from low to high
      start with the min value - check to see if value + 1 is in the set
            if yes increase length count 1, remove value from list, reset min
            if no reset count and remove value
      return max length found

Submit Your Solution:
   - Ensure your solution passes the LeetCode submission. <__passed
   - Submit your documentation and LeetCode solution via the designated platform.


Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109



   class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        set1 = set(nums)                                             ///<-- create a set from nums - deduplicate
        set1 = sorted(set1)                                          ///<-- sort the set lowest to highest
        length = len(set1)                                           ///<-- set max length for iterator and result
        print(set1)
        print(len(set1))
        max_length = 1                                               ///<-- set variable max_length to one, min length
        length_count = 1                                             ///<-- Trap for zero length array 
        if length == 0:
            return 0
        else:
            for i in range(length-1):                                ///<-- iterate through set checking consecutivity
                this = set1[i]
                next_peek = set1[i+1]
                print(f'this step: {this} and the next :{next_peek}')
                if this + 1 == next_peek:                            ///<-- true condition that next number is in list
                    length_count +=1
                else:                                                ///<-- false condition met reset counters
                    length_count = 1
                if length_count > max_length:
                    max_length = length_count
        return(max_length)                                           ///<-- return max length found




Conclusion,

this challenge was hard to flatten the logic to avoid nested loops and return results based on O(n^2) or higher

see attached screenshots for idealized solution time and space complexity of O(n)

the solution passed the tests  and are listed here :

1---------- Brute force (quick) --------

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0

        num_set = set(nums)  # Convert list to set to remove duplicates and allow O(1) lookups
        max_length = 0

        for num in num_set:
            # Only start counting if 'num' is the beginning of a sequence
            if num - 1 not in num_set:
                current_num = num
                current_length = 1

                while current_num + 1 in num_set:
                    current_num += 1
                    current_length += 1

                max_length = max(max_length, current_length)

        return max_length



2------------ Streamlined but O(n log n) and iterator O(n^2)


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0

        nums = list(set(nums)) 
        nums.sort() 

        max_length = 1
        current_length = 1

        for i in range(1, len(nums)):
            if nums[i] == nums[i - 1] + 1:
                current_length += 1
            else:
                max_length = max(max_length, current_length)
                current_length = 1

        return max(max_length, current_length)

3--------------- Efficient code --  only one iterator O(n) with if else decicions with O(1)


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        set1 = set(nums)
        set1 = sorted(set1)
        length = len(set1)
        print(set1)
        print(len(set1))
        max_length = 1
        length_count = 1
        if length == 0:
            return 0
        else:
            for i in range(length-1):
                this = set1[i]
                next_peek = set1[i+1]
                print(f'this step: {this} and the next :{next_peek}')
                if this + 1 == next_peek:
                    length_count +=1
                else:
                    length_count = 1
                if length_count > max_length:
                    max_length = length_count
        return(max_length)
