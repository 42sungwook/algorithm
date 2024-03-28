#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  vector<unsigned long long> v(2);

  cin >> v[0] >> v[1];
  sort(v.begin(), v.end());
  if (v[0] == v[1]) cout << 0 << "\n";
  else cout << v[1] - v[0] - 1 << "\n";
  for (unsigned long long i = v[0] + 1; i < v[1]; i++) cout << i << " ";
}