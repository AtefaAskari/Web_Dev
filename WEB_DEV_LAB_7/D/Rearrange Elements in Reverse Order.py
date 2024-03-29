N = int(input())
array = list(map(int, input().split()))

sorted_array = sorted(array)
rearranged_array = sorted_array[1::2] + sorted_array[:-1:2]

print(*rearranged_array)
