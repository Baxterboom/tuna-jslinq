JSLinqHelper.NonEnumerable(Array.prototype,
    "Skip", function <T>(this: T[], count: number): T[] {
        return this.slice(count, this.Count());
    });