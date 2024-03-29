# Input
N = int(input())
array = list(map(int, input().split()))

# Output even elements of the array
even_elements = [str(num) for num in array if num % 2 == 0]

# Print even elements separated by a space
print(" ".join(even_elements))
