JSLinqHelper.NonEnumerable(Array.prototype, "Where",
    function <T>(this: T[], selector: (item: T, index?: number) => boolean): T[] {
        if (selector == null) {
            throw new Error("Tuna-JSLinq: You must define a selector");
        }

        const result = new Array<T>();

        this.ForEach((item, index) => {
            if (selector(item, index) === true) {
                result.push(item);
            }
        });

        return result;
    });