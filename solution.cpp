```cpp
#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>

void sortKSortedArray(std::vector<int>& arr, int k) {
    std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;
    for (int i = 0; i <= k; i++) {
        minHeap.push(arr[i]);
    }
    int index = 0;
    for (int i = k + 1; i < arr.size(); i++) {
        arr[index++] = minHeap.top();
        minHeap.pop();
        minHeap.push(arr[i]);
    }
    while (!minHeap.empty()) {
        arr[index++] = minHeap.top();
        minHeap.pop();
    }
}

int main() {
    std::vector<int> arr = {6, 5, 3, 2, 8, 10, 9};
    int k = 3;
    sortKSortedArray(arr, k);
    for (int num : arr) {
        std::cout << num << " ";
    }
    return 0;
}
```