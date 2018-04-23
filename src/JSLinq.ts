interface IArrayState {
    Order: JSLinqOrderEntry[];
}

interface Array<T> {
    _JSLinq: IArrayState;
}

const JSLinq = <T=any>(array?: T | T[]) => {
    if (array && !Array.isArray(array)) {
        array = [array];
    }
    return array || [];
};

JSLinqHelper.NonEnumerable(Array.prototype, "_JSLinq", {
    Order: undefined
});