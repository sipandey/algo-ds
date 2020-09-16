const { BinarySearchTree } = require('./binarysearchtree');

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(3);
tree.insert(20);
tree.insert(6);
tree.insert(8);

/**
 * Breadth First Search (Iteratively)
 * 1. Create a queue (array) and a variable to store the
 * values of nodes visited
 * 2. Place the root node in the queue
 * 3. Loop as long as there is anything in the queue
 *  1. Dequeue a node from the queue and push the value of
 * the node into the variable that stores the nodes
 *  2. If there is a left property on the node dequeued -
 * add it to the queue
 *  3. If there is a right property on the node dequeued -
 * add it to the queue.
 * 4. Return the variable that stores the values
 */

const BFS = () => {
    const data = [];
    const queue = [];
    let node = tree.root;

    queue.push(node);
    while (queue.length) {
        node = queue.shift();
        data.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return data;
}

console.log(BFS());


