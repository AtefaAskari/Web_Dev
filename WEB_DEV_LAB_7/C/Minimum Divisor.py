x = int(input())

# Find the smallest divisor of x
smallest_divisor = None
for i in range(2, x):
    if x % i == 0:
        smallest_divisor = i
        break

# Output
print(smallest_divisor)
