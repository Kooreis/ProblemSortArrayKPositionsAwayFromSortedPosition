class PriorityQueue {
    // ... existing code ...

    _parent(i) {
        return Math.floor(i/2);
    }

    _left(i) {
        return i * 2;
    }

    _right(i) {
        return i * 2 + 1;
    }

    _hasLeft(i) {
        return this._left(i) <= this.size();
    }

    _hasRight(i) {
        return this._right(i) <= this.size();
    }

    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }

    _compare(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
}