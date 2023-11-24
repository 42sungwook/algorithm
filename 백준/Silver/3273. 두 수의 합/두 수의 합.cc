#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n;
  int x;
  int cnt = 0;

  cin >> n;

  vector<int> v(n);
  for (int i = 0; i < n; i++) {
    cin >> v[i];
  }
  sort(v.begin(), v.end());
  cin >> x;

  int i = 0, j = n - 1;

  while (i < j) {
    int sum = v[i] + v[j];
    if (sum == x) {
      cnt++;
      i++;
      j--;
    } else if (sum < x)
      i++;
    else
      j--;
  }
  cout << cnt << "\n";
}