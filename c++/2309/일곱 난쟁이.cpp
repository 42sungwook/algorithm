#include <iostream>
#include <vector>
#include <algorithm>
#include <utility>

std::vector<int> dwarf;

void makePermutation(int n, int r, int depth) {
	int num = 0;

	if (r == depth) {
		for (int i = 0; i < 7; i++)
			num += dwarf[i];
		if (num == 100) {
			for (int i = 0; i < 7; i++)
				std::cout << dwarf[i] << std::endl;
			exit(0);
		}
	}
	for (int i = depth; i < n; i++) {
		std::swap(dwarf[i], dwarf[depth]);
		makePermutation(n, r, depth + 1);
		std::swap(dwarf[i], dwarf[depth]);
	}
}

int main(){
	int height;

	for (int i = 0; i < 9; i++){
		std::cin >> height;
		dwarf.push_back(height);
	}
	sort(dwarf.begin(), dwarf.end());
	makePermutation(9, 9, 0);
}