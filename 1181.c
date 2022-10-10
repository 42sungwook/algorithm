/* 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 
    프로그램을 작성하시오.

1.길이가 짧은 것부터
2.길이가 같으면 사전 순으로

첫째 줄에 단어의 개수 N이 주어진다. (1 ≤ N ≤ 20,000) 둘째 줄부터 N개의 줄에 걸쳐 
알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다. 
주어지는 문자열의 길이는 50을 넘지 않는다.

조건에 따라 정렬하여 단어들을 출력한다. 단, 같은 단어가 여러 번 입력된 경우에는 한 번씩만 출력한다.
*/

#include <stdio.h>

int ft_cmp(char* word1, char* word2)
{
    int i = 0, j = 0;
    while (word1[i])
        i++;
    while (word2[j])
        j++;
    if (i != j)
        return (i - j);
    else
    {
        i = 0;
        while (word1[i] && word2[i] && word1[i] == word2[i])
            i++;
        return(word1[i] - word2[i]);
    }
}

int main()
{
    int cnt;
    char word[20001][51];
    int order[20000];
    int tmp;
    scanf("%d", &cnt);
    
    for (int i = 0; i < 20000; i++)
        order[i] = i;
    for (int i = 0; i < cnt; i++)
        scanf("%s", word[i]);
    for (int i = 0; i < cnt - 1; i++)
    {
        for (int j = 0; j < cnt - 1 - i; j++)
        {
            if (ft_cmp(word[order[j]], word[order[j + 1]]) > 0)
            {
                tmp = order[j + 1];
                order[j + 1] = order[j];
                order[j] = tmp;
            }
        }
    }
    printf("------------\n");
    printf("%s\n", word[order[0]]);
    for (int i = 1; i < cnt; i++)
    {
        if (ft_cmp(word[order[i]], word[order[i - 1]]) != 0)
            printf("%s\n", word[order[i]]);
    }
}