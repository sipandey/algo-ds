class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        else {
            let current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value) {
        if (this.root === null) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

const tree = new BinarySearchTree();
// console.log(tree.insert(10));
// console.log(tree.insert(5));
// console.log(tree.insert(13));
// console.log(tree.insert(11));
// console.log(tree.insert(2));
// console.log(tree.find(2));

module.exports = {
    BinarySearchTree
};


/**
 * Best and Average Case
 * Insertion: O(log n)
 * Searching: O(log n)
 * ** NOT guaranteed! **
 * Some BSTs are very slow if the tree is entirely
 * one-sided
 */
