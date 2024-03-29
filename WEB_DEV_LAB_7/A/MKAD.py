v = int(input("Enter Vasya's speed (kilometers per hour): "))
t = int(input("Enter the time in hours: "))

position = (v * t) % 109

print("Vasya will stop at mark", position)
