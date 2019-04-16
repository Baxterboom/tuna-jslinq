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
    /**
     * Removes all items in the array
     */
    Clear(): T[];
    /**
     * Creates a copy of the array
     */
    Clone(): T[];
    /**
     * Gets the index of the first item found by a selector
     * @param selector A function that returns a boolean when matching element was found
     */
    FindIndex(selector: (item: T, index: number) => boolean): number;
    /**
     * Gets the index of the last item found by a selector
     * @param selector A function that returns a boolean when matching element was found
     */
    FindLastIndex(selector: (item: T, index: number) => boolean): number;
    /**
     * Gets the item with the index
     * @param index Item index
     */
    Get(index: number): T;
    /**
     * Executes a method for each item in the array
     * @param action A function that gets executed for each element. If it returns true the loop stops.
     */
    ForEach(action: (item: T, index: number) => boolean | any): T[];
    /**
     * Removes an object from the array
     * @param item The object to remove
     */
    Remove(item: T): T[];
    /**
     * Removes an object at given index
     * @param index The object to remove
     */
    RemoveAt(index: number): T[];
    /**
     * Removes objects from the array
     * @param selector A selector-function to define a property to indentify object in array
     */
    RemoveAll(selector?: (item: T, index: number) => boolean | any): T[];
    /**
     * Removes an entry at a specific position
     * @param object The object to insert
     * @param index The position to insert
     */
    RemoveRange(start: number, length: number): T[];
    /**
     * Adds an object to the array
     * @param object The object to add
     */
    Add(item: T): T[];
    /**
     * Adds objects to the array
     * @param objects The array of objects to add
     */
    AddRange(items: T[]): T[];
    /**
     * Inserts an entry at a specific position
     * @param object The object to insert
     * @param index The position to insert
     */
    Insert(item: T, index: number): T[];
    /**
     * Searches for all items in array that match the given selector
     * @param selector A function that returns a boolean when matching element was found
     */
    Where(selector: (item: T, index: number) => boolean): T[];
    /**
     * Takes items in a specific range
     * @param start The start position
     * @param length The number of elements to take
     */
    Range(start: number, length: number): T[];
    /**
     * Repeats an object in the array
     * @param object The object to repeat
     * @param count The count of repeats
     */
    Repeat(item: T, count: number): T[];
    /**
     * Returns the length of the array
     * @param selector If set the function returns count of elements matched by the condition
     */
    Count(selector?: (item: T, index: number) => boolean): number;
    /**
     * Tests if all items in the array match the condition
     * @param selector A function that returns a boolean when matching element was found
     */
    All(selector: (item: T, index: number) => boolean): boolean;
    /**
     * Tests if any item is in the array
     * @param selector If set the function tests if any item in the array matches the condition
     */
    Any(selector?: (item: T, index: number) => boolean): boolean;
    /**
     * Returns the first item of the array - Throws an exception if no item was found
     * @param selector If set the function returns the first item that matches the selector
     */
    First(selector?: (item: T, index: number) => boolean): T;
    /**
     * Returns the first item of the array - returns `null` if no suitable item was found
     * @param selector If set the function returns the first item that matches the selector
     */
    FirstOrDefault(selector?: (item: T, index: number) => boolean): T;
    /**
     * Returns the only item of the array - Throws an exception if not exactly one item is in array
     * @param selector If set the function returns the only item that matches the selector
     */
    Single(selector?: (item: T, index: number) => boolean): T;
    /**
     * Returns the only item of the array - Throws an exception if not only one item is in array
     * @param selector If set the function returns the only item that matches the selector
     */
    SingleOrDefault(selector?: (item: T, index: number) => boolean): T;
    /**
     * Returns the last item of the array - Throws an exception if no item was found
     * @param selector If set the function returns the last item that matches the selector
     */
    Last(selector?: (item: T, index: number) => boolean): T;
    /**
     * Returns the last item of the array - returns `null` if no suitable item was found
     * @param selector If set the function returns the last item that matches the selector
     */
    LastOrDefault(selector?: (item: T, index: number) => boolean): T;
    /**
     * Select the properties for a new array
     * @param selector A function (or a function-string) that returns a new object
     */
    Select<U>(selector: (item: T, index: number) => U): U[];
    /**
     * Select the properties for a new array
     * @param selector A function (or a function-string) that returns a new object
     */
    SelectMany<U>(selector: (item: T, index?: number) => U[]): U[];
    /**
     * Limits the number of entries taken
     * @param count The count of elements taken
     */
    Take(count: number): T[];
    /**
     * Takes entries as long as a condition is true
     * @param selector The condition-function that returns a boolean. All elements until a false gets thrown are taken
     */
    TakeWhile(selector: (item: T, index: number) => boolean): T[];
    /**
     * Skips entries
     * @param count The count of elements skipped
     */
    Skip(count: number): T[];
    /**
     * Orders array by property or value in ascending direction
     * @param selector The selector-function that selects the property for sorting
     */
    OrderBy<U>(selector: (item: T) => U): T[];
    /**
     * Orders array by additional properties in ascending direction in combination with OrderBy/OrderByDescending
     * @param selector The selector-function that selects the property for sorting
     */
    ThenBy<U>(selector: (item: T) => U): T[];
    /**
     * Orders array by property or value in descending direction
     * @param selector The selector-function that selects the property for sorting
     */
    OrderByDescending<U>(selector: (item: T) => U): T[];
    /**
     * Orders array by additional properties in descending direction in combination with OrderBy/OrderByDescending
     * @param selector The selector-function that selects the property for sorting
     */
    ThenByDescending<U>(selector: (item: T) => U): T[];
    /**
     * Returns the smallest element in array
     * @param selector The selector-function that selects the property for comparison
     */
    Min<U>(selector?: (item: T) => U): T;
    /**
     * Returns the greates element in array
     * @param selector The selector-function that selects the property for comparison
     */
    Max<U>(selector?: (item: T) => U): T;
    /**
     * Groups array by property
     * @param selector The selector-function that selects the property for grouping
     */
    GroupBy<U>(selector?: (item: T) => U): {
        [name: string]: T[];
    };
    /**
     * Moves an item from one index to another
     * @param oldIndex The current position of the item
     * @param newIndex The new position of the item
     */
    Move(oldIndex: number, newIndex: number): T[];
    /**
     * Makes all values unique
     * @param selector A selector-function to select property for comparison and distinction
     */
    Distinct<U>(selector?: (item: T) => U): T[];
    /**
     * Tests if array contains specific object
     * @param item The object to test for
     */
    Contains(item: T): boolean;
    /**
     * Combines two arrays
     * @param array The array to combine
     */
    Concat(array: T[]): T[];
    /**
     * Combines two arrays but only applies values that are in both arrays
     * @param array The array to combine
     */
    Intersect(array: T[]): T[];
    /**
     * Joins the entries by a given char
     * @param character The character for joining
     * @param selector A selector-function to select property for joining
     */
    Join<U>(character: string, selector?: (item: T) => U): string;
    /**
     * Combines the entries using a custom function
     * @param method A function for aggregation
     * @param startVal The value to start aggregation
     */
    Aggregate<U, R>(accumulator: (accum: U, value: T, index: number, array: T[]) => R, initialValue?: U): R;
    /**
     * Reverses the array
     */
    Reverse(): T[];
    /**
     * Computes the average of the elements
     * @param selector A selector-function to select property for average computing
     */
    Average(selector?: (item: T) => number): number;
    /**
     * Computes the sum of the elements
     * @param selector A selector-function to select property for adding
     * @param filter If set the function computes the sum of elements that match the filter
     */
    Sum(selector?: (item: T) => number, filter?: (item: T) => boolean): number;
    /**
     * Compares to sequences of objects
     * @param array The array to compare
     */
    SequenceEqual(array: T[]): boolean;
    /**
     * Combines the entries of two arrays using a custom function
     * @param array The array to combine
     * @param result The function to combine elements
     */
    Zip<U, R>(array: U[], result: (first: T, second: U) => R): R[];
    /**
     * Combines two arrays without duplicates
     * @param array The array to combine
     */
    Union(array: T[]): T[];
    /**
     * Converts the array to a dictionary
     * @param keySelector The selector-function to select property for key
     * @param valueSelector A selector-function to select property for value
     */
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
