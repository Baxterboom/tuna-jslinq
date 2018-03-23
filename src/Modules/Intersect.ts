JSLinqHelper.NonEnumerable(Array.prototype, "Intersect",
    function <T>(this: T[], array: T[]): T[] {
        return this.Where(x => array.Contains(x));
    });