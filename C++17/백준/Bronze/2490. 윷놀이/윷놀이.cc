#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  vector<int> v(4);
  for (int i = 0; i < 3; i++) {
    cin >> v[0] >> v[1] >> v[2] >> v[3];
    sort(v.begin(), v.end());
    if (v[0] == 1)
      cout << 'E';
    else if (v[1] == 1)
      cout << 'A';
    else if (v[2] == 1)
      cout << 'B';
    else if (v[3] == 1)
      cout << 'C';
    else
      cout << 'D';
    cout << "\n";
  }
}