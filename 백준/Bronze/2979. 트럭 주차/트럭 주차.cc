#include <algorithm>
#include <iostream>

using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  int fee[4];
  int in, out, end = 0, tot = 0;
  int time[100] = {
      0,
  };

  fee[0] = 0;
  cin >> fee[1] >> fee[2] >> fee[3];
  fee[2] *= 2;
  fee[3] *= 3;

  for (int i = 0; i < 3; i++) {
    cin >> in >> out;  // 1 ~ 100
    if (end < out) end = out;
    while (in < out) {
      time[in - 1]++;
      in++;
    }
  }
  for (int i = 0; i < end; i++) {
    tot += fee[time[i]];
  }
  cout << tot << endl;
}
