JSLinqHelper.NonEnumerable("AddRange",
    function <T>(this: T[], items: T[]): T[] {
        items.ForEach(f => this.push(f));
        return this;
    });