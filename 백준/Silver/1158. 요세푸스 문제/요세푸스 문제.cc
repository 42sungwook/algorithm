#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int N, K;

  cin >> N >> K;

  list<int> people;
  for (int i = 1; i <= N; i++) {
    people.push_back(i);
  }

  list<int>::iterator it = people.begin();
  cout << "<";
  while (people.size() > 1) {
    for (int i = 1; i < K; i++) {
      it++;
      if (it == people.end()) {
        it = people.begin();
      }
    }
    cout << *it << ", ";
    it = people.erase(it);
    if (it == people.end()) {
      it = people.begin();
    }
  }
  cout << *it << ">";
  return 0;
}
