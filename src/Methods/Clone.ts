JSLinqHelper.NonEnumerable("Clone",
    function <T>(this: T[]): T[] {
        return this.slice(0);
    });