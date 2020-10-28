JSLinqHelper.NonEnumerable("All",
    function <T>(this: T[], selector: (item: T, index: number) => boolean): boolean {
        return this.Count(selector) === this.Count();
    });