#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int num = 0;
  int sum = 0;
  int smallest = 100;
  for (int i = 0; i < 7; i++) {
    cin >> num;
    if (num % 2 == 1) {
      sum += num;
      if (num < smallest) smallest = num;
    };
  }

  if (sum == 0)
    cout << -1;
  else
    cout << sum << "\n" << smallest;
}