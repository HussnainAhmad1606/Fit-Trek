#include <iostream>
using namespace std;
float Convert(float C)
{
    return (((9 / 5) * C) + 32);
}
int main()
{
    float C;
    cout << "Enter Temp in Celcious :";
    cin >> C;
    cout << Convert(C);
}