#include <iostream>
using namespace std;

int min(int a, int b, int c, int d) {
    int smallest = a;
    if (b < smallest) smallest = b;
    if (c < smallest) smallest = c;
    if (d < smallest) smallest = d;
    return smallest;
}

int main() {
    int a, b, c, d;
    cin >> a >> b >> c >> d;
    cout << min(a, b, c, d) << endl;
    return 0;
}
