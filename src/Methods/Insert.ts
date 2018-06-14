JSLinqHelper.NonEnumerable(Array.prototype, "Insert",
    function <T>(this: T[], item: T, index: number): T[] {
        this.splice(index, 0, item);
        return this;
    });