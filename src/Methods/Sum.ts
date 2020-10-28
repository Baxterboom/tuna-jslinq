JSLinqHelper.NonEnumerable("Sum",
    function <T>(this: T[], selector: (item: T) => any): number {
        let result = 0;
        const fn = selector || function (item: T) { return item; };

        this.ForEach(x => {
            result += fn(x);
        });

        return result;
    });