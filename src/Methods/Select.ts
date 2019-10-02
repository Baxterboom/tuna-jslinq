JSLinqHelper.NonEnumerable(Array.prototype, "Select",
    function <T>(this: T[], selector: (item: T, index: number) => any): any[] {
        const result = new Array<any>();

        this.ForEach((f, i) => {
            const item = selector(f, i);
            result.Add(item);
        });

        return result;
    });