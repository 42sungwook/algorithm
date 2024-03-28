#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n;
  cin >> n;
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n * 2; j++) {
      if (j < i + 1 || j > 2 * (n - 1) - i)
        cout << "*";
      else
        cout << " ";
    }
    cout << "\n";
  }
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n * 2; j++) {
      if (j < n - i || j > n + i - 1)
        cout << "*";
      else
        cout << " ";
    }
    cout << "\n";
  }
}