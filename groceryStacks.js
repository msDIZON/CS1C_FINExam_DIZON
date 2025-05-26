// Create an empty array to act as the stack
let groceryStack = [];

// Peek function to check if stack is empty and return the top value
function peek(stack) {
    if (stack.length === 0) {
        console.log("Stack is empty.");
        return null;
    } else {
        console.log("Top of stack:", stack[stack.length - 1]);
        return stack[stack.length - 1];
    }
}

// Push function to add an item to the stack
function push(stack, item) {
    stack.push(item);
    peek(stack);
    console.log("Stack after push:", stack);
}

// Pop function to remove the last item from the stack
function pop(stack) {
    if (stack.length === 0) {
        console.log("Cannot pop. Stack is empty.");
        peek(stack);
        return null;
    }
    let removed = stack.pop();
    peek(stack);
    console.log("Stack after pop:", stack);
    return removed;
}

// Accept five grocery items from user
for (let i = 0; i < 5; i++) {
    let item = prompt(`Enter grocery item #${i + 1}:`);
    push(groceryStack, item);
}

