class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length += 1;
        return this;
    }
    pop() {
        if (this.length === 0) return undefined;
        const currentTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null
        } else {
            let newTail = currentTail.prev;
            newTail.next = null;
            currentTail.prev = null;
            this.tail = newTail;
        }
        this.length -= 1;
        return currentTail;
    }
    shift() {
        if (this.length === 0) return undefined;
        const removedHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null
        } else {
            this.head = removedHead.next;
            this.head.prev = null;
            removedHead.next = null;
        }
        this.length -= 1;
        return removedHead;
    }
    unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        const mid = Math.floor(this.length / 2);
        if (index <= mid) {
            let counter = 0;
            let current = this.head;
            while (counter !== index) {
                current = current.next;
                counter += 1;
            }
            return current;
        } else {
            let current = this.tail;
            let counter = this.length - 1;
            while (counter !== index) {
                current = current.prev;
                counter -= 1;
            }
            return current;
        }
    }
    set(index, value) {
        const node = this.get(index);
        if (!node) return false;
        node.val = value;
        return true;
    }
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        else if (index === this.length) return !!this.push(value);
        else if (index === 0) return !!this.unshift(value);
        else {
            const newNode = new Node(value);
            const beforeNode = this.get(index - 1);
            const afterNode = beforeNode.next;
            newNode.next = afterNode;
            newNode.prev = beforeNode;
            beforeNode.next = newNode;
            afterNode.prev = newNode;
            this.length += 1;
            return true;
        }
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        const removedNode = this.get(index);
        const beforeNode = removedNode.prev;
        const afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;

        this.length -= 1;
        return removedNode;
    }
}

const list = new DoublyLinkedList();

console.log(list.push(50));
console.log(list.push(80));
console.log(list.push(90));
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.shift());
console.log(list.unshift(100));
console.log(list.get(0));
console.log(list.set(0, 400));
console.log(list.insert(1, 900));
console.log(list.remove(1));
console.log(list);

// console.log(JSON.stringify(list));