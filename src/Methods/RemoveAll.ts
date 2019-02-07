JSLinqHelper.NonEnumerable(Array.prototype, "RemoveAll",
    function <T>(this: T[], selector?: (item: T, index?: number) => boolean): T[] {
        if (!selector) return this.Clear();

        let i = this.length;
        while (i--) {
            const item = this[i];
            if (selector(item, i) === true) {
                this.RemoveAt(i);
            }
        }

        return this;
    });