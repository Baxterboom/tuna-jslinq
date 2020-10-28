JSLinqHelper.NonEnumerable("Count",
    function <T>(this: T[], selector?: (item: T, index: number) => boolean): number {
        return !selector ? this.length : this.Where(selector).length;
    });