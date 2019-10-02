JSLinqHelper.NonEnumerable(Array.prototype, "FirstOrDefault",
    function <T>(this: T[], selector?: (item: T, index: number) => boolean): T | null {
        if (!selector) return this.length > 0 ? this[0] : null;

        let result = null;

        this.ForEach((item, index) => {
            const match = selector(item, index) === true;
            if (match) result = item;
            return match;
        });

        return result;
    });