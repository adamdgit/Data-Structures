
class Node {
  constructor(data, next) {
    this.data = data,
    this.next = next
  };
}

class LinkedList {
  constructor() {
    this.head = null,
    this.length = 0,
    this.tail = null
  };

  // add new node to start of list
  unshift(data) {
    this.head = new Node(data, this.head);
    this.length++;
    if (this.length === 1) this.tail = this.head
  };

  // remove node from start of list
  shift() {
    if (!this.head) return false;

    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 1) this.tail = null;

    return oldHead;
  };

  // remove last node of list
  pop() {
    if (!this.head) return false;
    if (this.length === 1) return this.shift();

    const lastNode = this.getLast();
    let current = this.head;

    while (current.next !== lastNode) {
      current = current.next;
    }

    this.tail = this.get(this.length -2);
    current.next = null;
    this.length--;

    return lastNode;
  };

  // add node to end of list
  push(data) {
    if (!this.head) return this.unshift(data);
    const lastNode = this.getLast();

    lastNode.next = new Node(data, null);
    this.length++;
    this.tail = lastNode.next;
  }

  // get first node of list
  getFirst() {
    return this.head;
  };

  // get last node of list
  getLast() {
    let currentNode = this.head;

    while (currentNode && currentNode.next) {
      currentNode = currentNode.next
    }

    return currentNode
  };

  // return a node by index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;

    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // set data value for a node by the given index
  set(data, index) {
    if (index < 0 || index >= this.length) return false;
    const updatedNode = this.get(index);
    updatedNode.data = data;
    return updatedNode;
  }

  // remove a node by the given index
  remove(index) {
    if (!this.get(index)) return false;

    if (index === this.length -1) return this.pop(); // use pop for removing last element

    if (index === 0) return this.shift(); // use shift for removing first element

    const prevNode = this.get(index -1);
    const node = this.get(index);

    prevNode.next = node.next;
    this.length--;
    return node
  }

  // insert new node at given index
  insert(data, index) {
    if (index < 0 || index >= this.length) return false;

    if (index === 0) {
      this.unshift(data);
      return true;
    };

    const insertNode = this.get(index);
    const prevNode = this.get(index -1);
    const newNode = new Node(data, insertNode);

    prevNode.next = newNode;
    this.length++;
    return true;
  }

  // remove first node, let garbage collector clear remainder as they have no references
  clearList() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  };
}

const list = new LinkedList()

list.push(10)
list.push(2)
list.push(20)
list.push(5)

list.set(1, 3)

list.insert(500, 3)

console.log(list)

// BIG O FOR LINKED LISTS

// Insertion - O(n) / O(1) start and end
// Removal - O(n) / O(1) start
// Searching - O(n)
// Accessing - O(n)