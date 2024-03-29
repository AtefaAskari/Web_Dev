# Read input
n = int(input())
scores = list(map(int, input().split()))

# Sort the scores in descending order
sorted_scores = sorted(scores, reverse=True)

# Find the runner-up score
runner_up_score = sorted_scores[1]

# Print the runner-up score
print(runner_up_score)
