interface IArrayState {
    Order: JSLinqOrderEntry[];
}

interface Array<T> {
    _JSLinq: IArrayState;
}

const JSLinq = <T=any>(array?: T[]) => {
    return array || [];
};

JSLinqHelper.NonEnumerable(Array.prototype, "_JSLinq", {
    Order: undefined
});