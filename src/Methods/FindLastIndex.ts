JSLinqHelper.NonEnumerable("FindLastIndex",
    function <T>(this: T[], selector: (item: T, index: number) => boolean): number {
        if (!selector) throw new Error("Tuna-JSLinq: You must define a selector");

        let i = this.length;

        while (i--) {
            if (selector(this[i], i) === true) return i;
        }

        return -1;
    });