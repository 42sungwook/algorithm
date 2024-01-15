#include <bits/stdc++.h>

using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int cnt, cur, s_cnt = 0;

  cin >> cnt;

  stack<int> stack;
  vector<char> vector_p;

  for (int i = 0; i < cnt; i++) {
    cin >> cur;

    while (stack.empty() || (s_cnt < cnt && stack.top() != cur)) {
      stack.push(++s_cnt);
      vector_p.push_back('+');
    }

    if (stack.top() == cur) {
      stack.pop();
      vector_p.push_back('-');
    } else {
      cout << "NO\n";
      return 0;
    }
  }

  for (size_t i = 0; i < vector_p.size(); ++i) {
    cout << vector_p[i] << '\n';
  }
}