const {Stack} = require('./stackTest');
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}
class _NodeDouble {
  constructor({ data, previous = null, next = null }) {
    this.data = data;
    this.previous = previous;
    this.next = next;
  }
}

class DoubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    if (this.first === null) {
      const newNode = new _NodeDouble({ data });
      this.first = newNode;
      this.last = newNode;
      return;
    }
    const newNode = new _NodeDouble({ data, previous: this.last });
    this.last.next = newNode;
    this.last = newNode;
  }
  dequeue() {
    if (!this.first) return null;
    if (!this.first.next) {
      const returnNode = this.first.value;
      this.first = null;
      this.last = null;
      return returnNode.data;
    }
    const returnNode = this.first;
    this.first = this.first.next;
    this.first.previous = null;
    return returnNode.data;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);
    if (!this.first) {
      this.first = node;
      this.last = this.first;
      return;
    }
    this.last.next = node;
    this.last = node;
  }
  dequeue() {
    if (this.first === null) return;
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) this.last = null;
    return node.data;
  }
  isEmpty(){
    return this.first?false:true;
  }
}
function peek(queue) {
  return queue.first.data;
}
function isEmpty(queue) {
  return queue.first ? false : true;
}
function display(queue) {
  let current = queue.first;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
}

class StackQueue {
  constructor(){
    this.entryStack = new Stack();
    this.exitStack = new Stack();
  }
  enqueue(data){
    this.entryStack.push(data);
  }
  dequeue(){
    if (this.exitStack.isEmpty()){
      if (this.entryStack.isEmpty()) return null;
      while (!this.entryStack.isEmpty()){
        this.exitStack.push(this.entryStack.pop())
      }
    }
    return this.exitStack.pop();
  }
}


function dance(){
  const men = new Queue();
  const women = new Queue();
  function addDancer(dancer){
    const {gender,name} = dancer
    if (gender === 'male'){
      if (women.isEmpty()){
       return men.enqueue(dancer);
      }
      const woman = women.dequeue();
      console.log(`${woman.name} and ${name}`);
    } else {
      if (men.isEmpty()){
        return women.enqueue(dancer);
       }
       const man = men.dequeue();
       console.log(`${name} and ${man.name}`);
    }
  }

  addDancer({gender:'male',name:'Marcus'})
  addDancer({gender:'female',name:'Em'})
  addDancer({gender:'female',name:'Jannet'})
  addDancer({gender:'female',name:'Julie'})
  addDancer({gender:'male',name:'Mervin'})




}

dance();

function bank(){
  const bankQueue = new Queue();
  bankQueue.serve = function(){
    if (Math.random() <= 0.25){
      bankQueue.enqueue(bankQueue.dequeue)
    }
    bankQueue.dequeue();
  }
}