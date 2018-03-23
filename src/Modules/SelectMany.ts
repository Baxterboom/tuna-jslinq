JSLinqHelper.NonEnumerable(Array.prototype, "SelectMany",
    function <T>(this: T[], selector: (item: T, index?: number) => any[]): any[] {
        const result = new Array<any>();

        this.ForEach((item, index) => {
            const items = selector(item, index) || [];
            result.AddRange(items);
        });

        return result;
    });