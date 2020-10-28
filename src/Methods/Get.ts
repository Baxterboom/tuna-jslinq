JSLinqHelper.NonEnumerable("Get",
    function <T>(this: T[], index: number): T | null {
        const result = this[index];
        return result === undefined ? null : result;
    });