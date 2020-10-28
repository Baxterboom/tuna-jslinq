JSLinqHelper.NonEnumerable("Reverse",
    function <T>(this: T[]): T[] {
        return this.reverse();
    });