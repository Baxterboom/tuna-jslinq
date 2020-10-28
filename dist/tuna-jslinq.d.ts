declare class JSLinqHelper {
    static NonEnumerable<T>(instance: T, name: keyof T, value: any): void;
    static OrderCompareFunction<T>(valueSelector: (item: T) => any, a: T, b: T, invert: boolean): number;
}
interface IArrayState<T> {
    Order: JSLinqOrder<T>[];
}
interface Array<T> {
    _JSLinq: IArrayState<T>;
}
declare const JSLinq: <T = any>(array?: T | T[] | undefined) => T[];
interface Array<T> {
    Clear(): T[];
    Clone(): T[];
    FindIndex(selector: (item: T, index: number) => boolean): number;
    FindLastIndex(selector: (item: T, index: number) => boolean): number;
    Get(index: number): T;
    ForEach(action: (item: T, index: number) => boolean | any): T[];
    Remove(item: T): T[];
    RemoveAt(index: number): T[];
    RemoveAll(selector?: (item: T, index: number) => boolean | any): T[];
    RemoveRange(start: number, length: number): T[];
    Add(item: T): T[];
    AddRange(items: T[]): T[];
    Insert(item: T, index: number): T[];
    Where(selector: (item: T, index: number) => boolean): T[];
    Range(start: number, length: number): T[];
    Repeat(item: T, count: number): T[];
    Count(selector?: (item: T, index: number) => boolean): number;
    All(selector: (item: T, index: number) => boolean): boolean;
    Any(selector?: (item: T, index: number) => boolean): boolean;
    First(selector?: (item: T, index: number) => boolean): T;
    FirstOrDefault(selector?: (item: T, index: number) => boolean): T;
    Single(selector?: (item: T, index: number) => boolean): T;
    SingleOrDefault(selector?: (item: T, index: number) => boolean): T;
    Last(selector?: (item: T, index: number) => boolean): T;
    LastOrDefault(selector?: (item: T, index: number) => boolean): T;
    Select<U>(selector: (item: T, index: number) => U): U[];
    SelectMany<U>(selector: (item: T, index: number) => U[]): U[];
    Take(count: number): T[];
    TakeWhile(selector: (item: T, index: number) => boolean): T[];
    Skip(count: number): T[];
    OrderBy<U>(selector: (item: T) => U): T[];
    ThenBy<U>(selector: (item: T) => U): T[];
    OrderByDescending<U>(selector: (item: T) => U): T[];
    ThenByDescending<U>(selector: (item: T) => U): T[];
    Min<U>(selector?: (item: T) => U): T;
    Max<U>(selector?: (item: T) => U): T;
    GroupBy<U>(selector?: (item: T) => U): {
        [name: string]: T[];
    };
    Move(oldIndex: number, newIndex: number): T[];
    Distinct<U>(selector?: (item: T) => U): T[];
    Contains(item: T): boolean;
    Concat(array: T[]): T[];
    Intersect(array: T[]): T[];
    Join<U>(character: string, selector?: (item: T) => U): string;
    Aggregate<U, R>(accumulator: (accum: U, value: T, index: number, array: T[]) => R, initialValue?: U): R;
    Reverse(): T[];
    Average(selector?: (item: T) => number): number;
    Sum(selector?: (item: T) => number, filter?: (item: T) => boolean): number;
    SequenceEqual(array: T[]): boolean;
    Zip<U, R>(array: U[], result: (first: T, second: U) => R): R[];
    Union(array: T[]): T[];
    ToDictionary<U, R>(keySelector: (item: T) => U, valueSelector?: (item: T) => R): {
        [key: string]: R[];
    };
}
declare enum JSLinqOrderDirection {
    Ascending = 0,
    Descending = 1
}
declare class JSLinqOrder<T> {
    readonly direction: JSLinqOrderDirection;
    readonly selector: (item: T) => any;
    constructor(direction: JSLinqOrderDirection, selector: (item: T) => any);
}
