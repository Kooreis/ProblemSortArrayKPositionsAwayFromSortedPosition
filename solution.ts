Here is a TypeScript solution using a priority queue:

```typescript
class PriorityQueue {
    private heap: number[] = [];

    push(val: number) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): number {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0 && end !== undefined) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        return max;
    }

    size(): number {
        return this.heap.length;
    }

    private bubbleUp(n: number) {
        const element = this.heap[n];
        while (n > 0) {
            const parentN = Math.floor((n + 1) / 2) - 1;
            const parent = this.heap[parentN];
            if (element <= parent) break;
            this.heap[parentN] = element;
            this.heap[n] = parent;
            n = parentN;
        }
    }

    private sinkDown(n: number) {
        const length = this.heap.length;
        const element = this.heap[n];
        while (true) {
            const child2N = (n + 1) * 2;
            const child1N = child2N - 1;
            let swap = null;
            let child1, child2;
            if (child1N < length) {
                child1 = this.heap[child1N];
                if (child1 > element) swap = child1N;
            }
            if (child2N < length) {
                child2 = this.heap[child2N];
                if (child2 > (swap === null ? element : child1)) swap = child2N;
            }
            if (swap === null) break;
            this.heap[n] = this.heap[swap];
            this.heap[swap] = element;
            n = swap;
        }
    }
}

function sortK(arr: number[], k: number): number[] {
    const pq = new PriorityQueue();
    for (let i = 0; i < k + 1; i++) {
        pq.push(arr[i]);
    }
    let index = 0;
    for (let i = k + 1; i < arr.length; i++) {
        arr[index++] = pq.pop();
        pq.push(arr[i]);
    }
    while (pq.size() > 0) {
        arr[index++] = pq.pop();
    }
    return arr;
}

console.log(sortK([6, 5, 3, 2, 8, 10, 9], 3));
```

This solution uses a priority queue to maintain a sliding window of size `k + 1` while traversing the array. The maximum element in the window (which is at the root of the priority queue) is always the next element in the sorted order. When we move the window one step to the right, we push a new element into the priority queue and pop the maximum element from the queue (which is the next element in the sorted order) and put it in its correct position in the array.