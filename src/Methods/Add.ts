JSLinqHelper.NonEnumerable(Array.prototype, "Add",
    function <T>(this: T[], item: T): T[] {
        this.push(item);
        return this;
    });