JSLinqHelper.NonEnumerable(Array.prototype, "AddRange",
    function <T>(this: T[], items: T[]): T[] {
        items.ForEach(x => {
            this.Add(x);
        });

        return this;
    });