def is_leap(year):
    leap = False
    
    # If the year is evenly divisible by 4
    if year % 4 == 0:
        # If the year is evenly divisible by 100
        if year % 100 == 0:
            # If the year is evenly divisible by 400, it's a leap year
            if year % 400 == 0:
                leap = True
        # If the year is not evenly divisible by 100, it's a leap year
        else:
            leap = True
    
    return leap

# Read the year from STDIN
year = int(input())

# Call the is_leap function and print the result
print(is_leap(year))
