JSLinqHelper.NonEnumerable(Array.prototype, "Take",
    function <T>(this: T[], count: number): T[] {
        return this.slice(0, count);
    });