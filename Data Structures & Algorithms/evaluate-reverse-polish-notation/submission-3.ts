class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];

        for (let i = 0; i < tokens.length; i++) {
            switch (tokens[i]) { 
                case '+':
                    stack.push(stack.pop() + stack.pop());
                    break;
                case '*':
                    stack.push(stack.pop() * stack.pop());
                    break;
                case '-':
                    let neg = stack.pop();
                    stack.push(stack.pop() - neg);
                    break;
                case '/':
                    let a = stack.pop();
                    let b = stack.pop()
                    stack.push(Math.trunc(b / a));
                    break;
                default:
                    stack.push(+tokens[i])
                    break;
            }
            console.log('stack', stack);
        }
        return stack.pop();
    }
}
