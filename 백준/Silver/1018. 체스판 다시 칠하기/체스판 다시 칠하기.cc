#include <iostream>
#include <string>

using std::cin;
using std::cout;
using std::endl;

int compareBoard_w(std::string board, int board_len, int idx)
{
	std::string line_w = "WBWBWBWB";
	std::string line_b = "BWBWBWBW";
	int cnt = 0;
	int i = -1;
	int j;

	while (++i < 8)
	{
		j = -1;
		while (++j < 8)
		{
			if (i % 2 == 0 && board.at(idx) != line_b.at(j))
				cnt++;
			else if (i % 2 == 1 && board.at(idx) != line_w.at(j))
				cnt++;
			idx++;
		}
		idx += board_len - 8;
	}
	return (cnt);
}

int compareBoard_b(std::string board, int board_len, int idx)
{
	std::string line_w = "WBWBWBWB";
	std::string line_b = "BWBWBWBW";
	int cnt = 0;
	int i = -1;
	int j;

	while (++i < 8)
	{
		j = -1;
		while (++j < 8)
		{
			if (i % 2 == 0 && board.at(idx) != line_w.at(j))
				cnt++;
			else if (i % 2 == 1 && board.at(idx) != line_b.at(j))
				cnt++;
			idx++;
		}
		idx += board_len - 8;
	}
	return (cnt);
}

int main()
{
	std::string board;
	std::string tmp;
	int M;
	int N;
	int result;
	int smallest_cnt = -1;
	int i = -1;
	int j;

	cin >> M >> N;
	for (int i = 0; i < M; i++)
	{
		cin >> tmp;
		board += tmp;
	}

	while (++i < M - 7)
	{
		j = -1;
		while (++j < N - 7)
		{
			result = compareBoard_w(board, N, i * N + j);
			if (smallest_cnt == -1 || smallest_cnt > result)
				smallest_cnt = result;
			result = compareBoard_b(board, N, i * N + j);
			if (smallest_cnt > result)
				smallest_cnt = result;
		}
	}
	cout << smallest_cnt << endl;
	return 0;
}