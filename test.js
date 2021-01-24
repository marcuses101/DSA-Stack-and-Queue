class _Node {
    constructor(data, next){
        this.data = data;
        this.next = next
    }
}

class Stack {
    constructor(){
        this.top = null
    }

    push(data){
        this.top = new _Node(data,this.top)
    }
    pop(){
        const current = this.top;
        this.top = this.top?.next ?? null;
        return current;
    }
    peek(){
        console.log(this.top.data);
    }
    isEmpty(){
        return !this.top;
    }
    display(){
        let currentNode = this.top;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

function is_palindrome(s){
    const stringStack = new Stack()
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,"");
    // insert string;
    for (let i = 0; i < s.length; i++){
        stringStack.push(s[i]);
    }
    let reverse = "";
    while (!stringStack.isEmpty()){
        reverse+=stringStack.pop().data;
    }
    return reverse === s
}

function main(){
    console.log(is_palindrome("dad"));
    console.log(is_palindrome("A man, a plan, a canal: Panama"));
    console.log(is_palindrome("1001"));
    console.log(is_palindrome("Tauhida"))
}

main();