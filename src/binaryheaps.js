/**
 * Binary Heap?
 * 1. Very similar to a BST, but with some different rules!
 * 2. In a MaxBinaryHeap, parent nodes are always
 * larger than the child nodes.
 * 3. In a MinBinaryHeap, parent nodes are always
 * smaller than the child nodes.
 *
 * MAX BINARY HEAP
 * 1. Each parent has at most two child nodes.
 * 2. The value of each parent node is always greater than
 * its child nodes.
 * 3. In a max Binary Heap the parent is greater than the
 * children, but there are no guarantees between sibling
 * nodes.
 * 4. A binary heap is as compact as possible. All the
 * children of each node as as full as they can be and
 * left children are filled out first.
 *
 * Why do we need to know?
 * 1. Binary Heaps are used to implement Priority Queues, which
 * are very commonly used DS.
 * 2. They are also used with graph traversal algorithms.
 *
 * ** Representation of Heaps **
 * Binary Heap can be stored in an array or a list
 * For any index of an array n,
 *  left child is at 2n+1, and
 *  right child is at 2n+2
 *
 * For any child node at index n,
 *  its parent is at (n-1)/2 and floor it.
 *
 * Big O of Binary Heaps
 * Insertion: O(log n)
 * Removal: O(log n)
 * Search: O(n)
 *
 * Not made for search operations
 *
 * Useful for Sorting and implementing Priority Queues
 * MaxBinaryHeaps or MinBinaryHeaps
 * Using math, we can represent heaps using Arrays!
 */