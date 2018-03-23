JSLinqHelper.NonEnumerable(Array.prototype, "TakeWhile",
    function <T>(this: T[], selector: (item: T, index: number) => boolean): T[] {
        const result = [];
        const length = this.length;
        let i = 0;

        while (i < length && selector(this[i], i) === true) {
            result.push(this[i++]);
        }

        return result;
    });