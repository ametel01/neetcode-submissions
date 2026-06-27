class MinStack {
    private stack: number[];
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        let min = Infinity;
        for (let i = 0; i < this.stack.length; i++) {
            if (this.stack[i] < min) min = this.stack[i];
        }
        return min;
    }
}
