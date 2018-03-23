JSLinqHelper.NonEnumerable(Array.prototype, "Min",
    function <T>(this: T[], selector?: (item: T) => any): T | null {
        const fn = selector || function (item: T) { return item; };
        return this.OrderBy(fn).FirstOrDefault();
    });