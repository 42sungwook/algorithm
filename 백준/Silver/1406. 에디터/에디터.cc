#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n;
  string s;
  list<char> l;
  list<char>::iterator it;

  cin >> s >> n;

  for (int i = 0; i < s.size(); i++) {
    l.push_back(s[i]);
  }
  it = l.end();
  for (int i = 0; i < n; i++) {
    string cmd;
    cin >> cmd;

    if (cmd == "L") {
      if (it != l.begin()) {
        it--;
      }
    } else if (cmd == "D") {
      if (it != l.end()) {
        it++;
      }
    } else if (cmd == "B") {
      if (it != l.begin()) {
        it--;
        it = l.erase(it);
      }
    } else if (cmd == "P") {
      char c;
      cin >> c;
      l.insert(it, c);
    }
  }

  for (it = l.begin(); it != l.end(); it++) {
    cout << *it;
  }
}
