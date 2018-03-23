JSLinqHelper.NonEnumerable(Array.prototype, "Count",
    function <T>(this: T[], selector?: (item: T, index?: number) => boolean): number {
        return selector == null
            ? this.length
            : this.Where(selector).length;
    });