def count_evens(nums):
    # Count the number of even integers in the given list using list comprehension
    return sum(1 for num in nums if num % 2 == 0)