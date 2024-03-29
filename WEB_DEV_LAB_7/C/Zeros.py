N = int(input("Enter the number of numbers: "))
numbers = [int(input()) for _ in range(N)]

zero_count = sum(1 for num in numbers if num == 0)

print(zero_count)
