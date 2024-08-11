class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [null];
        this._comparator = comparator;
    }

    size() {
        return this._heap.length - 1;
    }

    isEmpty() {
        return this.size() == 0;
    }

    peek() {
        return this._heap[1];
    }

    push(value) {
        this._heap.push(value);
        this._siftUp();
    }

    pop() {
        const poppedValue = this.peek();
        const bottom = this.size();
        if (bottom > 1) {
            this._swap(1, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
}