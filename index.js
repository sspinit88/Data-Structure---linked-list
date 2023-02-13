class LinkedListNode {
  value;
  next;

  constructor(value, next = null) {
    this.value = value;
    this.next = next;
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
}

const list = new LinkedList();
const r = list.append('a').append('b').append('c');

console.log(r);
