JSLinqHelper.NonEnumerable(Array.prototype, "LastOrDefault",
    function <T>(this: T[], selector?: (item: T, index?: number) => boolean): T | null {
        if (selector != null) {
            let result = null;
            let i = this.length;
            while (i--) {
                const item = this[i];
                if (selector(item, i) === true) {
                    result = item;
                    break;
                }
            }

            return result;
        }

        return this.length > 0 ? this[this.length - 1] : null;
    });