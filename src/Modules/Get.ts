JSLinqHelper.NonEnumerable(Array.prototype, "Get",
    function <T>(this: T[], index: number): T | null {
        const result = this[index];
        return result === undefined ? null : result;
    });