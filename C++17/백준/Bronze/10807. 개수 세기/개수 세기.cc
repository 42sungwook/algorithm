#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n, tmp, v, cnt = 0;
  vector<int> arr;

  cin >> n;
  for (int i = 0; i < n; i++) {
    cin >> tmp;
    arr.push_back(tmp);
  }
  cin >> v;
  for (int i = 0; i < n; i++) {
    if (v == arr[i]) cnt++;
  }
  cout << cnt;
}