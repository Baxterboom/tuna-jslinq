JSLinqHelper.NonEnumerable(Array.prototype, "Last",
    function <T>(this: T[], selector?: (item: T, index?: number) => boolean): T {
        const result = this.LastOrDefault(selector);
        if (result) return result;

        throw new Error("Tuna-JSLinq: The Last Entry was not found");
    });