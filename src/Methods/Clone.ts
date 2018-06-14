JSLinqHelper.NonEnumerable(Array.prototype, "Clone",
    function <T>(this: T[]): T[] {
        return this.slice(0);
    });