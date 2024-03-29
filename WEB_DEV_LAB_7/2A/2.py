import math
import os
import random
import re
import sys



def check_number(n):
    if n % 2 == 1:
        print("Weird")
    else:
        if 2 <= n <= 5:
            print("Not Weird")
        elif 6 <= n <= 20:
            print("Weird")
        else:
            print("Not Weird")

# Read input from the user
num = int(input().strip())

# Call the function to check the number
check_number(num)

