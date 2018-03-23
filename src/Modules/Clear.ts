JSLinqHelper.NonEnumerable(Array.prototype, "Clear",
    function <T>(this: T[]): T[] {
        this.length = 0;
        return this;
    });