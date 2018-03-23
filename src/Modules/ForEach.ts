JSLinqHelper.NonEnumerable(Array.prototype, "ForEach",
    function <T>(this: T[], action: (item: T, index?: number) => boolean | any): T[] {
        const length = this.length;

        for (let i = 0; i < length; i++) {
            const result = action(this[i], i);
            if (result === true) {
                break;
            }
        }

        return this;
    });