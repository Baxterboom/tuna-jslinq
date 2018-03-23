JSLinqHelper.NonEnumerable(Array.prototype, "RemoveAt",
    function <T>(this: T[], index: number): T[] {
        this.splice(index, 1);
        return this;
    });