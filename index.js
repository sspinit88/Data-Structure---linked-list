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

  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          /// ссылку меняем через один
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    /// переписываем хвост
    if (this.tail?.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
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

const r = list
  .append('a')
  .append('b')
  .append('c')
  .append('d')
  .prepend('prepend');

const f = list.find('c');
const d = list.delete('d');

console.log('d:', d);
console.log('f:', f);
console.log(r.toString);
console.log(r.toArray);
