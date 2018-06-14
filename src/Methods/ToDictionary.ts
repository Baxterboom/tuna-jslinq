JSLinqHelper.NonEnumerable(Array.prototype, "ToDictionary",
    function <T>(this: T[], keySelector: (item: T) => any, valueSelector?: (item: T) => any): any {
        const result = this.GroupBy(keySelector);

        if (valueSelector) {
            for (let key in result) {
                result[key] = result[key].Select(valueSelector);
            }
        }

        return result;
    });