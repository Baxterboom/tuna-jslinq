"use strict";
var JSLinqHelper = (function () {
    function JSLinqHelper() {
    }
    JSLinqHelper.NonEnumerable = function (instance, name, value) {
        Object.defineProperty(instance, name, {
            value: value,
            enumerable: false,
            configurable: true
        });
    };
    JSLinqHelper.OrderCompareFunction = function (valueSelector, a, b, invert) {
        var value_a = valueSelector(a);
        var value_b = valueSelector(b);
        var type_a = typeof value_a;
        var type_b = typeof value_b;
        if (type_a === "string" && type_a === type_b) {
            var value_a_string = value_a;
            value_a_string = value_a_string.toLowerCase();
            var value_b_string = value_b;
            value_b_string = value_b_string.toLowerCase();
            if (value_a_string > value_b_string) {
                return invert === true ? -1 : 1;
            }
            else if (value_a_string < value_b_string) {
                return invert === true ? 1 : -1;
            }
            else {
                return 0;
            }
        }
        else if (type_a === "number" && type_a === type_b) {
            var value_a_number = value_a;
            var value_b_number = value_b;
            return invert === true ? value_b_number - value_a_number : value_a_number - value_b_number;
        }
        else if (type_a === "boolean" && type_a === type_b) {
            var value_a_bool = value_a;
            var value_b_bool = value_b;
            if (value_a_bool === value_b_bool) {
                return 0;
            }
            else {
                if (invert === true) {
                    return value_a_bool ? 1 : -1;
                }
                else {
                    return value_a_bool ? -1 : 1;
                }
            }
        }
        else {
            if (type_a === "undefined" && type_a === type_b) {
                return 0;
            }
            else if (type_a === "undefined") {
                return invert ? 1 : -1;
            }
            else if (type_b === "undefined") {
                return invert ? -1 : 1;
            }
            return 0;
        }
    };
    return JSLinqHelper;
}());
var JSLinq = function (array) {
    if (array && !Array.isArray(array)) {
        array = [array];
    }
    return (array || []);
};
JSLinqHelper.NonEnumerable(Array.prototype, "_JSLinq", {
    Order: undefined
});
var JSLinqOrderDirection;
(function (JSLinqOrderDirection) {
    JSLinqOrderDirection[JSLinqOrderDirection["Ascending"] = 0] = "Ascending";
    JSLinqOrderDirection[JSLinqOrderDirection["Descending"] = 1] = "Descending";
})(JSLinqOrderDirection || (JSLinqOrderDirection = {}));
var JSLinqOrder = (function () {
    function JSLinqOrder(direction, selector) {
        this.direction = direction;
        this.selector = selector;
    }
    return JSLinqOrder;
}());
JSLinqHelper.NonEnumerable(Array.prototype, "Add", function (item) {
    this.push(item);
    return this;
});
JSLinqHelper.NonEnumerable(Array.prototype, "AddRange", function (items) {
    var _this = this;
    items.ForEach(function (f) { return _this.push(f); });
    return this;
});
JSLinqHelper.NonEnumerable(Array.prototype, "Aggregate", function (accumulator, initialValue) {
    return this.reduce(accumulator, initialValue);
});
JSLinqHelper.NonEnumerable(Array.prototype, "All", function (selector) {
    return this.Count(selector) === this.Count();
});
JSLinqHelper.NonEnumerable(Array.prototype, "Any", function (selector) {
    if (!selector)
        return this.length > 0;
    var result = false;
    this.ForEach(function (item, index) { return result = selector(item, index) === true; });
    return result;
});
JSLinqHelper.NonEnumerable(Array.prototype, "Average", function (selector) {
    return this.Sum(selector) / this.Count();
});
JSLinqHelper.NonEnumerable(Array.prototype, "Clear", function () {
    this.length = 0;
    return this;
});
JSLinqHelper.NonEnumerable(Array.prototype, "Clone", function () {
    return this.slice(0);
});
JSLinqHelper.NonEnumerable(Array.prototype, "Concat", function (array) {
    return this.concat(array);
});
JSLinqHelper.NonEnumerable(Array.prototype, "Contains", function (item) {
    return this.Any(function (a) { return a === item; });
});
JSLinqHelper.NonEnumerable(Array.prototype, "Count", function (selector) {
    return !selector ? this.length : this.Where(selector).length;
});
JSLinqHelper.NonEnumerable(Array.prototype, "Distinct", function (selector) {
    var result = new Array();
    var groups = this.GroupBy(selector);
    for (var name_1 in groups) {
        var items = groups[name_1];
        if (items.Any())
            result.Add(items[0]);
    }
    return result;
});
JSLinqHelper.NonEnumerable(Array.prototype, "FindIndex", function (selector) {
    if (!selector)
        throw new Error("Tuna-JSLinq: You must define a selector");
    var result = -1;
    this.ForEach(function (item, index) {
        var match = selector(item, index) === true;
        if (match) {
            result = index;
        }
        return match;
    });
    return result;
});
JSLinqHelper.NonEnumerable(Array.prototype, "FindLastIndex", function (selector) {
    if (!selector)
        throw new Error("Tuna-JSLinq: You must define a selector");
    var i = this.length;
    while (i--) {
        if (selector(this[i], i) === true)
            return i;
    }
    return -1;
});
JSLinqHelper.NonEnumerable(Array.prototype, "First", function (selector) {
    var result = this.FirstOrDefault(selector);
    if (result)
        return result;
    throw new Error("Tuna-JSLinq: The First Entry was not found");
});
JSLinqHelper.NonEnumerable(Array.prototype, "FirstOrDefault", function (selector) {
    if (!selector)
        return this.length > 0 ? this[0] : null;
    var result = null;
    this.ForEach(function (item, index) {
        var match = selector(item, index) === true;
        if (match)
            result = item;
        return match;
    });
    return result;
});
JSLinqHelper.NonEnumerable(Array.prototype, "ForEach", function (action) {
    var length = this.length;
    for (var i = 0; i < length; i++) {
        var result = action(this[i], i);
        if (result === true) {
            break;
        }
    }
    return this;
});
JSLinqHelper.NonEnumerable(Array.prototype, "Get", function (index) {
    var result = this[index];
    return result === undefined ? null : result;
});
JSLinqHelper.NonEnumerable(Array.prototype, "GroupBy", function (selector) {
    return this.reduce(function (groups, item) {
        var value = selector ? selector(item) : item;
        groups[value] = groups[value] || [];
        groups[value].push(item);
        return groups;
    }, {});
});
JSLinqHelper.NonEnumerable(Array.prototype, "Insert", function (item, index) {
    this.splice(index, 0, item);
    return this;
});
JSLinqHelper.NonEnumerable(Array.prototype, "Intersect", function (array) {
    return this.Where(function (x) { return array.Contains(x); });
});
JSLinqHelper.NonEnumerable(Array.prototype, "Join", function (char, selector) {
    var result = this;
    if (selector)
        result = this.Select(selector);
    return result.join(char);
});
JSLinqHelper.NonEnumerable(Array.prototype, "Last", function (selector) {
    var result = this.LastOrDefault(selector);
    if (result)
        return result;
    throw new Error("Tuna-JSLinq: The Last Entry was not found");
});
JSLinqHelper.NonEnumerable(Array.prototype, "LastOrDefault", function (selector) {
    if (!selector)
        return this.length > 0 ? this[this.length - 1] : null;
    var result = null;
    var i = this.length;
    while (i--) {
        var item = this[i];
        if (selector(item, i) === true) {
            result = item;
            break;
        }
    }
    return result;
});
JSLinqHelper.NonEnumerable(Array.prototype, "Max", function (selector) {
    var fn = selector || function (item) { return item; };
    return this.OrderBy(fn).LastOrDefault();
});
JSLinqHelper.NonEnumerable(Array.prototype, "Min", function (selector) {
    var fn = selector || function (item) { return item; };
    return this.OrderBy(fn).FirstOrDefault();
});
JSLinqHelper.NonEnumerable(Array.prototype, "Move", function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
    return this;
});
JSLinqHelper.NonEnumerable(Array.prototype, "OrderBy", function (selector) {
    var clone = this.Clone();
    clone._JSLinq.Order = new Array(new JSLinqOrder(JSLinqOrderDirection.Ascending, selector));
    return clone.sort(function (a, b) {
        return JSLinqHelper.OrderCompareFunction(selector, a, b, false);
    });
});
JSLinqHelper.NonEnumerable(Array.prototype, "OrderByDescending", function (selector) {
    var ordered = this.Clone();
    ordered._JSLinq.Order = new Array(new JSLinqOrder(JSLinqOrderDirection.Descending, selector));
    return ordered.sort(function (a, b) {
        return JSLinqHelper.OrderCompareFunction(selector, a, b, true);
    });
});
JSLinqHelper.NonEnumerable(Array.prototype, "Range", function (start, length) {
    return this.Skip(start).Take(length);
});
JSLinqHelper.NonEnumerable(Array.prototype, "Remove", function (item) {
    var index = this.indexOf(item);
    if (index > -1)
        this.RemoveAt(index);
    return this;
});
JSLinqHelper.NonEnumerable(Array.prototype, "RemoveAll", function (selector) {
    if (!selector)
        return this.Clear();
    var i = this.length;
    while (i--) {
        var item = this[i];
        if (selector(item, i) === true) {
            this.RemoveAt(i);
        }
    }
    return this;
});
JSLinqHelper.NonEnumerable(Array.prototype, "RemoveAt", function (index) {
    this.splice(index, 1);
    return this;
});
JSLinqHelper.NonEnumerable(Array.prototype, "RemoveRange", function (start, length) {
    var _this = this;
    this.Skip(start).Take(length).ForEach(function (f) { return _this.Remove(f); });
    return this;
});
JSLinqHelper.NonEnumerable(Array.prototype, "Repeat", function (item, count) {
    for (var i = 0; i < count; i++) {
        this.Add(item);
    }
    return this;
});
JSLinqHelper.NonEnumerable(Array.prototype, "Reverse", function () {
    return this.reverse();
});
JSLinqHelper.NonEnumerable(Array.prototype, "Select", function (selector) {
    var result = new Array();
    this.ForEach(function (f, i) {
        var item = selector(f, i);
        result.Add(item);
    });
    return result;
});
JSLinqHelper.NonEnumerable(Array.prototype, "SelectMany", function (selector) {
    var result = new Array();
    this.ForEach(function (item, index) {
        var items = selector(item, index) || [];
        result.AddRange(items);
    });
    return result;
});
JSLinqHelper.NonEnumerable(Array.prototype, "SequenceEqual", function (array) {
    if (this === array) {
        return true;
    }
    if (this.length !== array.length) {
        return false;
    }
    for (var i = 0; i < this.length; i++) {
        var left = this[i];
        var right = array[i];
        if (left !== right) {
            return false;
        }
    }
    return true;
});
JSLinqHelper.NonEnumerable(Array.prototype, "Single", function (selector) {
    var result = selector ? this.Where(selector) : this;
    if (result.Count() !== 1) {
        throw new Error("Tuna-JSLinq: The array does not contain exactly one element");
    }
    return result.First();
});
JSLinqHelper.NonEnumerable(Array.prototype, "SingleOrDefault", function (selector) {
    return this.Any(selector) ? this.Single(selector) : null;
});
JSLinqHelper.NonEnumerable(Array.prototype, "Skip", function (count) {
    return this.slice(count, this.Count());
});
JSLinqHelper.NonEnumerable(Array.prototype, "Sum", function (selector) {
    var result = 0;
    var fn = selector || function (item) { return item; };
    this.ForEach(function (x) {
        result += fn(x);
    });
    return result;
});
JSLinqHelper.NonEnumerable(Array.prototype, "Take", function (count) {
    return this.slice(0, count);
});
JSLinqHelper.NonEnumerable(Array.prototype, "TakeWhile", function (selector) {
    var result = [];
    var length = this.length;
    var i = 0;
    while (i < length && selector(this[i], i) === true) {
        result.push(this[i++]);
    }
    return result;
});
JSLinqHelper.NonEnumerable(Array.prototype, "ThenBy", function (selector) {
    var order = this._JSLinq.Order;
    if (order == null || !order.Any()) {
        throw new Error("Tuna-JSLinq: Please call OrderBy or OrderByDescending before ThenBy");
    }
    var ordered = this;
    order.Add(new JSLinqOrder(JSLinqOrderDirection.Ascending, selector));
    return ordered.sort(function (a, b) {
        for (var _i = 0, order_1 = order; _i < order_1.length; _i++) {
            var entry = order_1[_i];
            var result = JSLinqHelper.OrderCompareFunction(entry.selector, a, b, entry.direction === JSLinqOrderDirection.Descending);
            if (result !== 0)
                return result;
        }
        return 0;
    });
});
JSLinqHelper.NonEnumerable(Array.prototype, "ThenByDescending", function (selector) {
    var order = this._JSLinq.Order;
    if (order == null || !order.Any()) {
        throw new Error("Tuna-JSLinq: Please call OrderBy or OrderByDescending before ThenByDescending");
    }
    var ordered = this;
    order.Add(new JSLinqOrder(JSLinqOrderDirection.Descending, selector));
    return ordered.sort(function (a, b) {
        for (var _i = 0, order_2 = order; _i < order_2.length; _i++) {
            var entry = order_2[_i];
            var result = JSLinqHelper.OrderCompareFunction(entry.selector, a, b, entry.direction === JSLinqOrderDirection.Descending);
            if (result !== 0) {
                return result;
            }
        }
        return 0;
    });
});
JSLinqHelper.NonEnumerable(Array.prototype, "ToDictionary", function (keySelector, valueSelector) {
    var result = this.GroupBy(keySelector);
    if (valueSelector) {
        for (var key in result) {
            result[key] = result[key].Select(valueSelector);
        }
    }
    return result;
});
JSLinqHelper.NonEnumerable(Array.prototype, "Union", function (array) {
    return this.Concat(array).Distinct();
});
JSLinqHelper.NonEnumerable(Array.prototype, "Where", function (selector) {
    if (!selector)
        throw new Error("Tuna-JSLinq: You must define a selector");
    var result = new Array();
    this.ForEach(function (item, index) {
        if (selector(item, index) === true) {
            result.push(item);
        }
    });
    return result;
});
JSLinqHelper.NonEnumerable(Array.prototype, "Zip", function (array, selector) {
    var result = new Array();
    this.ForEach(function (item, index) {
        if (item != null) {
            result.Add(selector(item, array[index]));
        }
    });
    return result;
});
