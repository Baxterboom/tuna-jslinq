JSLinqHelper.NonEnumerable("OrderBy",
    function <T>(this: T[], selector: (item: T) => any): T[] {
        const clone = this.Clone();
        clone._JSLinq.Order = new Array(new JSLinqOrder(JSLinqOrderDirection.Ascending, selector));

        return clone.sort(function (a, b) {
            return JSLinqHelper.OrderCompareFunction(selector, a, b, false);
        });
    });