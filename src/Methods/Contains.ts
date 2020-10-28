JSLinqHelper.NonEnumerable("Contains",
    function <T>(this: T[], item: T): boolean {
        return this.Any(a => a === item);
    });