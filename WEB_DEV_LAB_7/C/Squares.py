a = int(input())
b = int(input())

for num in range(a, b + 1):
    sqrt = int(num ** 0.5)
    if sqrt * sqrt == num:
        print(num, end=" ")