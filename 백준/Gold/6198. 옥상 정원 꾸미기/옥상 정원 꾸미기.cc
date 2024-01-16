#include <bits/stdc++.h>

using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int cnt, input;
  long long sum = 0;
  stack<int> s;

  cin >> cnt;

  for (int i = 0; i < cnt; i++) {
    cin >> input;
    while (!s.empty() && s.top() <= input) s.pop();
    sum += (long long)s.size();
    s.push(input);
  }
  cout << sum;
}
