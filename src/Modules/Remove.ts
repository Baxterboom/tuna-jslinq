JSLinqHelper.NonEnumerable(Array.prototype, "Remove",
    function <T>(this: T[], item: T): T[] {
        const index = this.indexOf(item);
        if (index > -1) {
            this.RemoveAt(index);
        }

        return this;
    });