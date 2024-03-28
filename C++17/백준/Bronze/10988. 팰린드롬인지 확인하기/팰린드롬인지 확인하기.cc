#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

vector<char> arr;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  string word;

  cin >> word;
  for (int i = 0; word[i]; i++) {
    arr.push_back(word[i]);
  }
  for (unsigned int i = 0; i < arr.size() / 2; i++) {
    if (arr[i] != arr[arr.size() - i - 1]) {
      cout << 0 << endl;
      return 0;
    }
  }
  cout << 1 << endl;
}