class JSLinqHelper {

    public static NonEnumerable(name: string, value: any) {
        Object.defineProperty(Array.prototype, name, {
            value: value,
            enumerable: false,
            configurable: true
        });
    }

    // public static OrderCompareFunction<T>(selector: (item: T) => any, left: T, right: T, invert: boolean): number {
    //     if (left === right) { return 0; }
    //     const charMatcher = /(\d+)|(\D+)/gi;

    //     let l = selector(left);
    //     l = l == null ? "" : l.toString();

    //     let r = selector(right);
    //     r = r == null ? "" : r.toString();

    //     const a1 = l.match(charMatcher) || [];
    //     const a2 = r.match(charMatcher) || [];

    //     while (a1.length && a2.length) {
    //         let v1 = a1.shift() as any;
    //         let v2 = a2.shift() as any;

    //         if (invert) {
    //             v2 = [v1, v1 = v2].First();
    //         }

    //         const d1 = !isNaN(v1);
    //         const d2 = !isNaN(v2);

    //         if (d1 || d2) {
    //             if (!d1) { return 1; }
    //             if (!d2) { return -1; }
    //             if (v1 !== v2) {
    //                 return v1 - v2 || v1.length - v2.length; // lenght checks, handles scenarios where '02' compares to '2'
    //             }
    //         }

    //         if (v1 !== v2) {
    //             return v1 > v2 ? 1 : -1;
    //         }
    //     }

    //     return a1.length - a2.length;
    // }

    public static OrderCompareFunction<T>(valueSelector: (item: T) => any, a: T, b: T, invert: boolean): number {
        const value_a: any = valueSelector(a);
        const value_b: any = valueSelector(b);

        const type_a: string = typeof value_a;
        const type_b: string = typeof value_b;

        if (type_a === "string" && type_a === type_b) {
            let value_a_string: string = value_a;
            value_a_string = value_a_string.toLowerCase();
            let value_b_string: string = value_b;
            value_b_string = value_b_string.toLowerCase();

            if (value_a_string > value_b_string) {
                return invert === true ? -1 : 1;
            } else if (value_a_string < value_b_string) {
                return invert === true ? 1 : -1;
            } else {
                return 0;
            }

        } else if (type_a === "number" && type_a === type_b) {
            const value_a_number: number = value_a;
            const value_b_number: number = value_b;

            return invert === true ? value_b_number - value_a_number : value_a_number - value_b_number;
        } else if (type_a === "boolean" && type_a === type_b) {
            const value_a_bool: boolean = value_a;
            const value_b_bool: boolean = value_b;

            if (value_a_bool === value_b_bool) {
                return 0;
            } else {
                if (invert === true) {
                    return value_a_bool ? 1 : -1;
                } else {
                    return value_a_bool ? -1 : 1;
                }
            }
        } else {
            if (type_a === "undefined" && type_a === type_b) {
                return 0;
            } else if (type_a === "undefined") {
                return invert ? 1 : -1;
            } else if (type_b === "undefined") {
                return invert ? -1 : 1;
            }

            return 0;
        }
    }
}