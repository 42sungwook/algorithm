#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  vector<int> V(10);
  int n;
  int max;

  cin >> n;
  while (n > 0) {
    V[n % 10]++;
    n /= 10;
  }
  V[6] = round((V[6] + V[9]) / 2.0);
  max = *max_element(V.begin(), V.end() - 1);
  cout << max << "\n";
}