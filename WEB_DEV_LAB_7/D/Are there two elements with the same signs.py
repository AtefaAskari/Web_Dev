# Input
N = int(input())
array = list(map(int, input().split()))

# Check if there is a pair of adjacent elements with the same characters
for i in range(1, N):
    if str(array[i])[0] == str(array[i - 1])[0]:
        print("YES")
        break
else:
    print("NO")
