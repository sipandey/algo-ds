class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        const newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return this.size += 1;
    }
    dequeue() {
        if (!this.first) return null;
        const temp = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = temp.next;
        this.size -= 1;
        return temp.value;
    }
}

const queue = new Queue();
console.log(queue.enqueue(10));
console.log(queue.enqueue(20));
console.log(queue.dequeue());
console.log(queue.dequeue());


