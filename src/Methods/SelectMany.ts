JSLinqHelper.NonEnumerable(Array.prototype, "SelectMany",
    function <T, U>(this: T[], selector: (item: T, index: number) => U[]): U[] {
        const result = new Array<U>();

        this.ForEach((item, index) => {
            const items = selector(item, index) || [];
            result.AddRange(items);
        });

        return result;
    });