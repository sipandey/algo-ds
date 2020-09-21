# Hash Tables

## Objectives

- Explain what a hash table is
- Define a hashing algorithm
- Discuss what makes a good hashing algorithm
- Understand how collisions occur in a hash table
- Handle collisions using separate chaining or linear probing

#### What is a Hash Table?

- used to store key-value pairs.
- like arrays but the keys are not ordered.
- unlike arrays, they are fast for all operations: search, add, remove.

#### The Hash Part

- to implement a hash table, we'll be using an array.
- in order to look up values by key, we need a way to convert keys into valid array indices.
- function that performs this task is called a hash function.

#### What makes a good hash?

- Fast
- doesn't cluster outputs at specific indices, but distributes uniformly.
- deterministic (same input yields same output)

#### Handling Collisions

- Separate Chaining:
  - With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).
  - This allows us to store multiple key-value pairs at the same index.
- Linear Probing:

  - When we find a collision, we search through the array to find the next empty slot.
  - Unlike with separate chaining, this allows us to store a single key-value at each index.

#### Hash Table Big O Complexity

_Average and Best Time_

- Insert: O(1)
- Deletion: O(1)
- Access: O(1)

#### Recap

- Hash tables are collections of key-value pairs.
- Hash tables can find values quickly given a key.
- Hash tables can add new key-values quickly.
- Hash tables store data in a large array and work by hashing the keys.
- A good hash should be fast, distribute keys uniformly, and be deterministic.
- Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index.
