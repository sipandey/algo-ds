const { BinarySearchTree } = require('./binarysearchtree');

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

/**
 * Depth First Tree (PreOrder) - Recursively
 * 1. Create a variable to store the values of nodes visited
 * 2. Store the root of the BST in a variable called current
 * 3. Write a helper function which accepts a node.
 *  1. Push the value of the node to the variable that
 * stores the values.
 *  2. If the node has a left property, call the helper
 * function with the left property on the node.
 *  3. If the node has a right property, call the helper
 * function with the right property on the node.
 * 4. Invoke the helper function with the current variable.
 * 5. Return the array of values
 */

const DFSPreOrder = () => {
    const data = [];
    const current = tree.root;
    const traverse = (node) => {
        data.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
}

/**
 * Depth First Tree (PostOrder) - Recursively
 * 1. Create a variable to store the values of nodes visited
 * 2. Store the root of the BST in a variable called current
 * 3. Write a helper function which accepts a node.
 *  1. If the node has a left property, call the helper
 * function with the left property on the node.
 *  2. If the node has a right property, call the helper
 * function with the right property on the node.
 *  3. Push the value of the node to the variable that
 * stores the values.
 * 4. Invoke the helper function with the current variable.
 * 5. Return the array of values
 */

const DFSPostOrder = () => {
    const data = [];
    const current = tree.root;
    const traverse = (node) => {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        data.push(node.value);
    }
    traverse(current);
    return data;
}

/**
 * Depth First Tree (InOrder) - Recursively
 * 1. Create a variable to store the values of nodes visited
 * 2. Store the root of the BST in a variable called current
 * 3. Write a helper function which accepts a node.
 *  1. If the node has a left property, call the helper
 * function with the left property on the node.
 *  2. Push the value of the node to the variable that
 * stores the values.
 *  3. If the node has a right property, call the helper
 * function with the right property on the node.
 * 4. Invoke the helper function with the current variable.
 * 5. Return the array of values
 */

const DFSInOrder = () => {
    const data = [];
    const current = tree.root;
    const traverse = (node) => {
        if (node.left) traverse(node.left);
        data.push(node.value);
        if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
}

console.log('DFSPreOrder', DFSPreOrder());
console.log('DFSPostOrder', DFSPostOrder());
console.log('DFSInOrder', DFSInOrder());