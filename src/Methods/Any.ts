JSLinqHelper.NonEnumerable(Array.prototype, "Any",
    function <T>(this: T[], selector?: (item: T, index: number) => boolean): boolean {
        if (!selector) return this.length > 0;

        let result = false;
        this.ForEach((item, index) => result = selector(item, index) === true);
        return result;
    });