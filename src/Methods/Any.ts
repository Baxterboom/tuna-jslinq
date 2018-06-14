JSLinqHelper.NonEnumerable(Array.prototype, "Any",
    function <T>(this: T[], selector?: (item: T, index?: number) => boolean): boolean {
        return this.FirstOrDefault(selector) !== null;
    });