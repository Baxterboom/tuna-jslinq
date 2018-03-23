JSLinqHelper.NonEnumerable(Array.prototype, "Distinct",
    function <T>(this: T[], selector?: (item: T) => any): T[] {
        const result = new Array<T>();
        const groups = this.GroupBy(selector);

        for (let name in groups) {
            result.Add(groups[name][0]);
        }
        return result;
    });