JSLinqHelper.NonEnumerable(Array.prototype, "Range",
    function <T>(this: T[], start: number, length: number): T[] {
        return this.Skip(start).Take(length);
    });