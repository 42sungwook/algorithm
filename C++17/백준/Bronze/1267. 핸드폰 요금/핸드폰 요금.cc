#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int Y = 0, M = 0, N, x;

  cin >> N;
  for (int i = 0; i < N; i++) {
    cin >> x;
    Y += x / 30 * 10 + 10;
    M += x / 60 * 15 + 15;
  }
  if (Y == M)
    cout << "Y M " << Y;
  else if (Y < M)
    cout << "Y " << Y;
  else
    cout << "M " << M;
}