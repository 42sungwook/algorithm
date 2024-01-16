#include <bits/stdc++.h>

using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int cnt, input;
  stack<pair<int, int> > s;

  cin >> cnt;

  vector<int> v(cnt + 1);
  s.push(make_pair(0, 1000000001));

  for (int i = 1; i <= cnt; i++) {
    cin >> input;
    while (s.size() > 1 && s.top().second < input) {
      v[s.top().first] = input;
      s.pop();
    }
    s.push(make_pair(i, input));
  }
  while (s.size() > 1) {
    v[s.top().first] = -1;
    s.pop();
  }
  for (int i = 1; i <= cnt; i++) {
    cout << v[i] << ' ';
  }
}
