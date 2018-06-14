JSLinqHelper.NonEnumerable(Array.prototype, "Join",
    function <T>(this: T[], char: string, selector?: (item: T) => any): string {
        let result = this;

        if (selector != null) {
            result = this.Select(selector);
        }

        return result.join(char);
    });
