# Read input
x = int(input())
y = int(input())
z = int(input())
n = int(input())

# Generate list of all possible coordinates
coordinates = [[i, j, k] for i in range(x+1) for j in range(y+1) for k in range(z+1)]

# Filter out coordinates where the sum is not equal to n
filtered_coordinates = [coord for coord in coordinates if sum(coord) != n]

# Print the filtered coordinates
print(filtered_coordinates)
