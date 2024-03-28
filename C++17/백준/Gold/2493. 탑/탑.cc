#include <bits/stdc++.h>

using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int cnt, input, high = 0, index = 0;

  cin >> cnt;

  stack<pair<int, int> > s;

  s.push(make_pair(0, 100000001));

  for (int i = 1; i <= cnt; i++) {
    cin >> input;
    while (s.top().second < input) s.pop();
    cout << s.top().first << ' ';
    s.push(make_pair(i, input));
  }
}
