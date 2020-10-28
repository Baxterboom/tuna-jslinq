JSLinqHelper.NonEnumerable("ThenByDescending",
    function <T>(this: T[], selector: (item: T) => any): T[] {
        const order = this._JSLinq.Order;
        if (order == null || !order.Any()) {
            throw new Error("Tuna-JSLinq: Please call OrderBy or OrderByDescending before ThenByDescending");
        }

        const ordered = this;

        order.Add(new JSLinqOrder(JSLinqOrderDirection.Descending, selector));

        return ordered.sort(function (a, b) {
            for (const entry of order) {
                const result: number = JSLinqHelper.OrderCompareFunction(entry.selector, a, b, entry.direction === JSLinqOrderDirection.Descending);
                if (result !== 0) {
                    return result;
                }
            }

            return 0;
        });
    });