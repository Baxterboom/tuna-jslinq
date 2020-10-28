JSLinqHelper.NonEnumerable("Distinct",
    function <T>(this: T[], selector?: (item: T) => T): T[] {
        const result = new Array<T>();
        const groups = this.GroupBy(selector);

        for (let name in groups) {
            const items = groups[name];
            if (items.Any()) result.Add(items[0]);
        }
        return result;
    });