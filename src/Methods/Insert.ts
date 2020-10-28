JSLinqHelper.NonEnumerable("Insert",
    function <T>(this: T[], item: T, index: number): T[] {
        this.splice(index, 0, item);
        return this;
    });