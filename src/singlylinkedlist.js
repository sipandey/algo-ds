class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
        return this;
    }
    pop() {
        if (this.length === 0 || this.head === null) return undefined;
        // set the current and newTail to be the same.
        let current = this.head;
        let newTail = current;
        // until we reach the tail
        while (current.next) {
            // set the newTail to be the current element
            // and move the current forward
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;
        // if the list becomes empty we need to set head and tail to be null
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (this.length === 0 || this.head === null) return undefined;
        const removedHead = this.head;
        this.head = removedHead.next;
        this.length -= 1;
        if (this.length === 0) {
            this.tail = null;
        }
        return removedHead;
    }
    unshift(val) {
        const newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
        if (this.length === 0) {
            this.tail = newHead;
        }
        this.length += 1;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter += 1;
        }
        return current;
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
            const previousNode = this.get(index - 1);
            newNode.next = previousNode.next;
            previousNode.next = newNode;
            this.length += 1;
            return true;
        }
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        else if (index === this.length - 1) return this.pop();
        else if (index === 0) return this.shift();
        else {
            const previousNode = this.get(index - 1);
            const removedNode = previousNode.next;
            previousNode.next = removedNode.next;
            this.length -= 1;
            return removedNode;
        }
    }
    reverse() {
        if (this.length === 0) return null;
        const temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next;
        let prev = null;
        let current = temp;
        for (let i = 0; i < this.length; i++) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }
    print() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

const list = new SinglyLinkedList();
console.log(list.push('Hello'));
console.log(list.push('Goodbye'));
console.log(list.push('!'));
// console.log(list.pop());
// console.log(list.pop());
console.log(list.push('pushed again'));
// console.log(list.shift());
// console.log(list.unshift(20));
// console.log(list.unshift(40));
// console.log(list.get(1));
// console.log(list.set(1, 'yoyo'));
// console.log(list.insert(0, 'random'));
list.print();
console.log(list.reverse())
list.print();





console.log(list);
// console.log(list.head);
// console.log(list.tail);
// console.log(list.head.next);
