JSLinqHelper.NonEnumerable(Array.prototype, "FindIndex",
    function <T>(this: T[], selector: (item: T, index?: number) => boolean): number {
        if (!selector) throw new Error("Tuna-JSLinq: You must define a selector");

        let result = -1;

        this.ForEach((item, index) => {
            const match = selector(item, index) === true;
            if (match) {
                result = index;
            }
            return match;
        });

        return result;
    });