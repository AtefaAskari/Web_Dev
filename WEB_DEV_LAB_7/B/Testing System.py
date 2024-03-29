recorded_answer = int(input())
student_answer = int(input())

if recorded_answer == 1 and student_answer != 1:
    print("NO")
elif recorded_answer != 1 and student_answer == 1:
    print("NO")
else:
    print("YES")
