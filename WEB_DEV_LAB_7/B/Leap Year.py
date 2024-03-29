year = int(input("Enter the year: "))

is_leap_year = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

if is_leap_year:
    print("YES")
else:
    print("NO")
