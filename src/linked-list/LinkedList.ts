import { LinkedListNode } from './LinkedListNode';

class LinkedList<E> {
  private dummyHead = new LinkedListNode<E>();
  private size:number = 0;
  private last = this.dummyHead;
  constructor() {
  }

  public add(index:number, e:E) {
    if (index === this.size) {
      this.addLast(e);
      return;
    }
    this.checkIndexRange(index);
    let prev = this.dummyHead;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    const node = new LinkedListNode(e);
    node.next = prev.next;
    prev.next = node;
    ++this.size;
  }

  public get(index:number) {
    this.checkIndexRange(index);
    let cur = this.dummyHead.next;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur.e;
  }

  // TODO: Memory manager for delete element
  public remove(index:number) {
    if (this.size === 0) {
      return undefined;
    }
    this.checkIndexRange(index);
    let prev = this.dummyHead;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    const removeE = prev.next.e;
    prev.next = prev.next.next;
    --this.size;
    return removeE;
  }

  public contains(e:E) {
    let cur = this.dummyHead.next;
    while (cur !== undefined) {
      if (cur.e === e) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  public getSize() {
    return this.size;
  }

  public isEmpty() {
    return this.size === 0;
  }

  public addFirst(e:E) {
    this.add(0, e);
  }

  public addLast(e:E) {
    const prev = this.last;
    this.last = new LinkedListNode(e);
    prev.next = this.last;
    ++this.size;
  }

  public removeFirst() {
    return this.remove(0);
  }

  public removeLast() {
    return this.remove(this.size - 1);
  }

  public getFirst() {
    return this.get(0);
  }

  public getLast() {
    return this.get(this.size - 1);
  }

  public toString() {
    let cur = this.dummyHead.next;
    let str = '';
    while (cur !== undefined) {
      str += cur.e;
      str += ',';
      cur = cur.next;
    }
    return str.slice(0, -1);
  }

  private checkIndexRange(index:number) {
    if (index < 0 || index > this.size) {
      throw new RangeError(`The argument index must be between 0 and ${this.size}.`);
    }
  }
}

export {
  LinkedList,
};
