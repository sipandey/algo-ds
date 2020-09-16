/**
 * Priority Queue?
 * A DS where each element has a priority. Elements with
 * higher priorities are served before elements with lower
 * priorities.
 * Example: Processes in the OS
 * 
 *  - Min Binary Heap - lower number means higher
 * priority.
 *  - Each node has a val and a priority. Use priority
 * to build the heap.
 *  - Enqueue method accepts a value and priority, makes
 * new node and puts it in the right spot based off of its
 * priority.
 *  - Dequeue method removes root element returns it, and rearranges
 * heap using priority.
 */

class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    bubbleUp() {
        let index = this.values.length - 1;
        while (index > 0) {
            const parentIdx = Math.floor((index - 1) / 2);
            const parent = this.values[parentIdx];
            const element = this.values[index];

            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[index] = parent;
            index = parentIdx;
        }
    }
    sinkDown() {
        let parentIdx = 0;
        const length = this.values.length;
        let element = this.values[parentIdx];
        while (parentIdx < length) {
            let leftChildIdx = 2 * parentIdx + 1;
            let rightChildIdx = 2 * parentIdx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[parentIdx] = this.values[swap];
            this.values[swap] = element;
            parentIdx = swap;
        }
    }
    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    dequeue() {
        const maxPriority = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return maxPriority;
    }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(45, 5);
priorityQueue.enqueue(90, 1);
priorityQueue.enqueue(40, 4);
priorityQueue.enqueue(41, 2);
priorityQueue.enqueue(32, 3);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());

console.log(priorityQueue.values);