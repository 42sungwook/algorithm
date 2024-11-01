#include <iostream>
using namespace std;

int main() {
   ios_base::sync_with_stdio(false);
   cin.tie(NULL);
   
   int M, num;
   string order;
   int S = 0;
   
   cin >> M;
   while(M--) {
       cin >> order;
       if(order == "add") {
           cin >> num;
           S |= (1 << num);
       }
       else if(order == "remove") {
           cin >> num;
           S &= ~(1 << num);
       }
       else if(order == "check") {
           cin >> num;
           if(S & (1 << num)) cout << "1\n";
           else cout << "0\n";
       }
       else if(order == "toggle") {
           cin >> num;
           S ^= (1 << num);
       }
       else if(order == "all") {
           S = (1 << 21) - 1;
       }
       else if(order == "empty") {
           S = 0;
       }
   }
   
   return 0;
}