#include <iostream>
using namespace std;

bool Xor(bool x, bool y) {
    return (x || y) && !(x && y);
}

int main() {
    bool x, y;
    cin >> x >> y;
    cout << Xor(x, y) << endl;
    return 0;
}
