JSLinqHelper.NonEnumerable(Array.prototype, "OrderByDescending",
    function <T>(this: T[], selector: (item: T) => any): T[] {
        const ordered = this.Clone();
        ordered._JSLinq.Order = new Array(new JSLinqOrderEntry(JSLinqOrderEntryDirection.Descending, selector));

        return ordered.sort(function (a, b) {
            return JSLinqHelper.OrderCompareFunction(selector, a, b, true);
        });
    });