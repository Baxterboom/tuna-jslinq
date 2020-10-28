JSLinqHelper.NonEnumerable("Average",
    function <T>(this: T[], selector?: (item: T) => number): number {
        return this.Sum(selector) / this.Count();
    });