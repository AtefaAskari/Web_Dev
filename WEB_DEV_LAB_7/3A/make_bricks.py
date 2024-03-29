def make_bricks(small, big, goal):
    # Calculate the maximum number of inches we can use from big bricks
    max_big_inches = big * 5
    # Calculate the remaining goal inches after using big bricks
    remaining_goal = goal - min(goal // 5, big) * 5
    # Check if the remaining goal can be covered by small bricks
    return remaining_goal <= small