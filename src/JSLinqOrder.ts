enum JSLinqOrderDirection {
    Ascending, Descending
}

class JSLinqOrder<T> {
    constructor(public readonly direction: JSLinqOrderDirection, public readonly selector: (item: T) => any) { }
}