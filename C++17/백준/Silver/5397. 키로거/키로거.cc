#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

	int n;
	string s;

	cin >> n;
	for (int i = 0; i < n; i++) {
		cin >> s;
		list<char> l;
		list<char>::iterator it = l.begin();
		for (int j = 0; j < s.size(); j++) {
			if (s[j] == '<') {
				if (it != l.begin()) it--;
			} else if (s[j] == '>') {
				if (it != l.end()) it++;
			} else if (s[j] == '-') {
				if (it != l.begin()) {
					it--;
					it = l.erase(it);
				}
			} else {
				l.insert(it, s[j]);
			}
		}
		for (it = l.begin(); it != l.end(); it++) {
			cout << *it;
		}
		cout << '\n';
	}
}
