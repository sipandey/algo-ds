/**
 * Max Binary Heap
 * 1. Add to the end
 * 2. Bubble up.
 * 
 * Insertion:
 * 1. Push the value into the values property on the heap
 * 2. Bubble up:
 *  1. Create a variable called index which is the length
 * of the values property - 1.
 *  2. Create a variable called parentIndex which is the
 * floor of (index-1)/2
 *  3. Keep looping as long as the values element at the
 * parentIndex is less than the values element at the 
 * child index.
 *   1. Swap the value of the values element at the 
 * parentIndex with the value of the element property
 * at the child index
 *   2. Set the index to be the parentIndex, and start over!
 * 
 * Removing: (Extract Max)
 *  - Remove the root
 *  - Replace with the most recently added.
 *  - Adjust (sink down)
 * 
 * 1. Swap the first value in the values property with
 * the last one.
 * 2. Pop from the values property, so you can return the 
 * value at the end.
 * 3. Have the new root "sink down" to the correct spot.
 *      1. Your parent index starts at 0 (the root)
 *      2. Find the index of the left child (2*n+1)
 *      3. Find the index of the right child (2*n+2)
 *      4. If the left or right child is greater than the
 * element...swap. If both left and right are larger, swap 
 * with the largest child.
 *      5. The child index you swapped to now becomes the
 * new parent index.
 *      6. Keep looping and swapping until neither child
 * is larger than the element.
 *      7. Return the old root!
 */

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    bubbleUp() {
        let index = this.values.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.values[parentIndex];
            const element = this.values[index];
            if (element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    sinkDown() {
        let parentIndex = 0;
        const length = this.values.length;
        let element = this.values[parentIndex];
        while (parentIndex < length) {
            let leftChildIdx = 2 * parentIndex + 1;
            let rightChildIdx = 2 * parentIndex + 2;
            let leftChild;
            let rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[parentIndex] = this.values[swap];
            this.values[swap] = element;
            parentIndex = swap;
        }
    }
    insert(value) {
        this.values.push(value);
        this.bubbleUp();
        return this.values;
    }
    extractMax() {
        const maxEl = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return maxEl;
    }
}

const maxBinaryHeap = new MaxBinaryHeap();
console.log(maxBinaryHeap.insert(41));
console.log(maxBinaryHeap.insert(39));
console.log(maxBinaryHeap.insert(33));
console.log(maxBinaryHeap.insert(18));
console.log(maxBinaryHeap.insert(27));
console.log(maxBinaryHeap.insert(12));
console.log(maxBinaryHeap.insert(55));
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.values);