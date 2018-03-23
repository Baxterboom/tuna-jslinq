JSLinqHelper.NonEnumerable(Array.prototype, "OrderBy",
    function <T>(this: T[], selector: (item: T) => any): T[] {
        const ordered = this.Clone();
        ordered._JSLinq.Order = new Array(new JSLinqOrderEntry(JSLinqOrderEntryDirection.Ascending, selector));

        return ordered.sort(function (a, b) {
            return JSLinqHelper.OrderCompareFunction(selector, a, b, false);
        });
    });