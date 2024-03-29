x = int(input())

divisor_count = 0
sqrt_x = int(x**0.5)
for i in range(1, sqrt_x + 1):
    if x % i == 0:
        divisor_count += 1
        if i != x // i:
            divisor_count += 1

print(divisor_count)
