JSLinqHelper.NonEnumerable(Array.prototype, "Concat",
    function <T>(this: T[], array: T[]): T[] {
        return this.concat(array);
    });