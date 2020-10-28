JSLinqHelper.NonEnumerable("RemoveAt",
    function <T>(this: T[], index: number): T[] {
        this.splice(index, 1);
        return this;
    });