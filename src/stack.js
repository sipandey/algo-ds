class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }
        return this.size += 1;
    }
    pop() {
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

const stack = new Stack();
console.log(stack.push(10));
console.log(stack.push(20));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);

