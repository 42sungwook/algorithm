#include <bits/stdc++.h>

using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  vector<int> a(3);

  cin >> a[0] >> a[1] >> a[2];
  sort(a.begin(), a.end());
  if (a[0] == a[1] && a[1] == a[2])
    cout << 10000 + a[0] * 1000;
  else if (a[0] == a[1] || a[1] == a[2])
    cout << 1000 + a[1] * 100;
  else
    cout << a[2] * 100;
}