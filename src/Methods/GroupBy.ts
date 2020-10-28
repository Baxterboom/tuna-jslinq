JSLinqHelper.NonEnumerable("GroupBy",
    function <T>(this: T[], selector?: (item: T) => any): any {
        return this.reduce((groups: any, item: T) => {
            const value = selector ? selector(item) : item;
            groups[value] = groups[value] || [];
            groups[value].push(item);
            return groups;
        }, {});
    });