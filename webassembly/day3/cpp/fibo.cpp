#include <stdio.h>
#include <math.h>
#include <vector>

using namespace std;
int fib(int n) {
    static std::vector<int> table; // our cache
    if (n <= 1) {
        return n;
    }
    else if (n >= table.size()) {
        table.resize(n+1);
    }

    if (table[n] == 0) {
        // only recalc if we don't have a value
        table[n] = fib(n-1) + fib(n-2);
    }
    return table[n];
}

int main(void) {
    printf("%d \n",fib(450));
}