JSLinqHelper.NonEnumerable("Repeat",
    function <T>(this: T[], item: T, count: number): T[] {
        for (let i = 0; i < count; i++) {
            this.Add(item);
        }

        return this;
    });