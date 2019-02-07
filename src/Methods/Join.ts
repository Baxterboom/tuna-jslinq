JSLinqHelper.NonEnumerable(Array.prototype, "Join",
    function <T>(this: T[], char: string, selector?: (item: T) => any): string {
        let result = this;
        if (selector) result = this.Select(selector);
        return result.join(char);
    });
