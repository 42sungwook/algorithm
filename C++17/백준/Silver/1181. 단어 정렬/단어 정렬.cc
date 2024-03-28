#include <bits/stdc++.h>

using namespace std;

bool cmp(string a, string b) {
  if (a.length() == b.length()) {
    return a < b;
  } else {
    return a.length() < b.length();
  }
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int cnt;
  string s[20000];

  cin >> cnt;
  for (int i = 0; i < cnt; i++) {
    cin >> s[i];
  }
  sort(s, s + cnt, cmp);
  for (int i = 0; i < cnt; i++) {
    if (i != 0 && s[i] == s[i - 1]) continue;
    cout << s[i] << '\n';
  }
}