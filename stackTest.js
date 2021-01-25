class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    this.top = new _Node(data, this.top);
  }
  pop() {
    const current = this.top;
    this.top = this.top?.next ?? null;
    return current.data;
  }
  peek() {
    return this.top;
  }
  isEmpty() {
    return !this.top;
  }
  display() {
    let currentNode = this.top;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
  sortAsc() {
    function isAscending(stack) {
      if (stack.isEmpty()) return false;
      let isAsc = true;
      let currentNode = stack.top;
      while (currentNode.next !== null && isAsc) {
        isAsc = currentNode.data <= currentNode.next.data ? true : false;
        currentNode = currentNode.next;
      }
      return isAsc;
    }
    if (this.isEmpty()) return;
    if (isAscending(this)) return;
    const stackOne = this;
    const stackTwo = new Stack();
    let providerStack = stackOne;
    let targetStack = stackTwo;
    let sortDes = true;
    while (!isAscending(stackOne)) {
      if (sortDes) {
        let current = providerStack.pop();
        let temp = current.data;
        while (current.next !== null) {
          if (temp < current.next.data) {
            targetStack.push(temp);
            temp = current.next.data;
          } else {
            targetStack.push(current.next.data);
          }
          current = providerStack.pop();
        }
        targetStack.push(temp);
        sortDes = !sortDes;
        [providerStack, targetStack] = [targetStack, providerStack];
      } else {
        let current = providerStack.pop();
        let temp = current.data;
        while (current.next !== null) {
          if (temp > current.next.data) {
            targetStack.push(temp);
            temp = current.next.data;
          } else {
            targetStack.push(current.next.data);
          }
          current = providerStack.pop();
        }
        targetStack.push(temp);
        sortDes = !sortDes;
        [providerStack, targetStack] = [targetStack, providerStack];
      }
    }
  }
}

function is_palindrome(s) {
  const stringStack = new Stack();
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // insert string;
  for (let i = 0; i < s.length; i++) {
    stringStack.push(s[i]);
  }
  let reverse = "";
  while (!stringStack.isEmpty()) {
    reverse += stringStack.pop().data;
  }
  return reverse === s;
}

function parentheses(string) {
  const stack = new Stack();
  const matches = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let matched = true;
  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    if (["(", "{", "["].includes(currentChar)) {
      stack.push({ character: currentChar, index: i });
    }
    if ([")", "}", "]"].includes(currentChar)) {
      const expectChar = matches[stack.peek()?.data.character];
      if (expectChar === currentChar) {
        stack.pop();
      } else if (!expectChar) {
        console.log(`unexpected ${currentChar} at position ${i}`);
        return false;
      } else {
        matched = false;
        console.log(
          `expected '${expectChar}', but found a '${currentChar}' at position ${i}`
        );
        return false;
      }
    }
  }
  while (!stack.isEmpty()) {
    matched = false;
    let { index, character } = stack.pop().data;
    console.log(`unmatched '${character}' at position ${index}`);
  }
  return matched;
}

module.exports  = {Stack}