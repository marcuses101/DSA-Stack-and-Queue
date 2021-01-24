class _Node {
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor(){
        this.top = null;
    }
// O(n) time complexity
    push(data){
        if (this.top === null){
            this.top = new _Node(data,null);
            return;
        }
        const node = new _Node(data,this.top)
        this.top = node;
    }
    pop(){
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
    }
    enqueue(data){
        const node = new _Node(data);

        if (this.first === null){
            this.first = node;
        }

        if (this.last){
            this.last.next = node;
        }

        this.last = node;
    }
    dequeue(){
        if (this.first === null){
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        if (node === this.last){
            this.last = null;
        }
    }
}