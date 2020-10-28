JSLinqHelper.NonEnumerable("SingleOrDefault",
    function <T>(this: T[], selector?: (item: T, index: number) => boolean): T | null {
        return this.Any(selector) ? this.Single(selector) : null;
    });