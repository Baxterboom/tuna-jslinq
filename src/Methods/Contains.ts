JSLinqHelper.NonEnumerable(Array.prototype, "Contains",
    function <T>(this: T[], item: T): boolean {
        return this.Any(a => a === item);
    });