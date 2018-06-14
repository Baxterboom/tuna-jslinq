JSLinqHelper.NonEnumerable(Array.prototype, "Zip",
    function <T, X>(this: T[], array: X[], selector: (first: T, second: X) => any): any[] {
        const result = new Array<any>();

        this.ForEach((item, index) => {
            if (item != null) {
                result.Add(selector(item, array[index]));
            }
        });

        return result;
    });