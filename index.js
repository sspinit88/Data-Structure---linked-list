class LinkedListNode {
  value;
  next;

  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get toString() {
    return `${this.value}`;
  }
}

class LinkedList {
  head;
  tail;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  /// append() - для добавления нового элемента в список
  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;

    this.tail = newNode;

    return this;
  }

  /// prepend - добавляет элемент в начало списка
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  get toArray() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  get toString() {
    return this.toArray.map((node) => node.toString);
  }
}

const list = new LinkedList();
const r = list.append('a').append('b').append('c').prepend('prepend');

console.log(r.toString);
console.log(r.toArray);
