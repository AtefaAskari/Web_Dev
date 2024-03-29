# Input
N = int(input())
array = list(map(int, input().split()))

# Count the number of elements larger than the previous one
count = sum(1 for i in range(1, N) if array[i] > array[i - 1])

# Output the count
print(count)
