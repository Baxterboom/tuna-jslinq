JSLinqHelper.NonEnumerable(Array.prototype, "Select",
    function <T>(this: T[], selector: (item: T, index?: number) => any): any[] {
        const result = new Array<any>();

        this.ForEach(f => {
            const item = selector(f);
            result.Add(item);
        });

        return result;
    });