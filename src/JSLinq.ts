interface IArrayState<T> {
    Order: JSLinqOrder<T>[];
}

interface Array<T> {
    _JSLinq: IArrayState<T>;
}

const JSLinq = <T = any>(array?: T | T[]) => {
    if (array && !Array.isArray(array)) {
        array = [array];
    }
    return (array || []) as T[];
};

JSLinqHelper.NonEnumerable(Array.prototype, "_JSLinq", {
    Order: undefined
});