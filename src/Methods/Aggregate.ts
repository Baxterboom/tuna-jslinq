JSLinqHelper.NonEnumerable(Array.prototype, "Aggregate",
    function <T, U>(this: T[], accumulator: (accum: U, value: T, index: number, array: T[]) => any, initialValue?: U): any {
        return this.reduce(accumulator, initialValue as U);
    });