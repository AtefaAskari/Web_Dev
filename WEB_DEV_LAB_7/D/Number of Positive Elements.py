N = int(input())
array = list(map(int, input().split()))

positive_count = sum(1 for num in array if num > 0)

print(positive_count)
