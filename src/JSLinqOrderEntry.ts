class JSLinqOrderEntry {
    public Direction: JSLinqOrderEntryDirection;
    public ValueSelector: (item: any) => any;

    constructor(_direction: JSLinqOrderEntryDirection, _valueSelector: (item: any) => any) {
        this.Direction = _direction;
        this.ValueSelector = _valueSelector;
    }
}

enum JSLinqOrderEntryDirection {
    Ascending, Descending
}