"use strict";
var Users = [];
var Fruits = [];
var Numbers = [];
var Booleans = [];
beforeEach(function () {
    Users = [
        new User(1, "Brenda", "Thompson", 49),
        new User(2, "Kelly", "Grady", 62),
        new User(3, "Lavina", "Baskin", 22),
        new User(4, "Corey", "Medina", 55),
        new User(5, "Walter", "Pankey", 55),
        new User(6, "Virginia", "Ayala", 54),
        new User(7, "Allison", "Israel", 38),
        new User(8, "Christine", "Starkey", 19),
        new User(9, "Robert", "Humphreys", 22),
        new User(10, "Daniel", "Stanley", 85),
        new User(11, "Frank", "Brown", 73),
        new User(12, "Juan", "Barnhart", 56),
        new User(13, "Timothy", "Olson", 29),
        new User(14, "Christina", "Holland", 81),
        new User(15, "Albert", "Dunn", 58),
        new User(16, "Kelly", "Grady", 48)
    ];
    Fruits = [
        "Banana",
        "Apple",
        "Pineapple",
        "Coconut",
        "Strawberry",
        "Melon",
        "Apricot",
        "Peach",
        "Nectarine",
        "Pear",
        "Quince",
        "Lemon",
        "Orange",
        "Mandarin",
        "Cherry"
    ];
    Numbers = [
        76, 122, 63, 782, 85, 87, 55, 63, 35, 1, -10, 63.2, 627, 1000
    ];
    Booleans = [
        true, false, false, true, false, true, true, false, false, false, true
    ];
});
var User = /** @class */ (function () {
    function User(_id, _firstName, _name, _age) {
        this.Id = _id;
        this.FirstName = _firstName;
        this.Name = _name;
        this.Age = _age;
    }
    return User;
}());
describe("Add", function () {
    it("at end", function () {
        expect(Fruits.Add("X-Last").Last()).toBe("X-Last");
    });
    it("string", function () {
        expect(Fruits.Add("Fruit").Count()).toBe(16);
    });
    it("number", function () {
        expect(Numbers.Add(12).Count()).toBe(15);
    });
    it("user", function () {
        expect(Users.Add(new User(5, "Walter", "Pankey", 61)).Count()).toBe(17);
    });
    it("null", function () {
        expect(Users.Add(null).Count()).toBe(17);
    });
    it("undefined", function () {
        expect(Users.Add(undefined).Count()).toBe(17);
    });
});
describe("AddRange", function () {
    it("at end", function () {
        expect(Fruits.AddRange(["X-Some", "X-Last"]).Last()).toBe("X-Last");
    });
    it("strings", function () {
        expect(Fruits.AddRange(["Fruit", "another Fruit"]).Count()).toBe(17);
    });
    it("numbers", function () {
        expect(Numbers.AddRange([12, 13]).Count()).toBe(16);
    });
    it("users", function () {
        expect(Users.AddRange([new User(5, "Walter", "Pankey", 61), new User(6, "Walter", "Pankey", 61)]).Count()).toBe(18);
    });
    it("null", function () {
        expect(Users.AddRange([null, null]).Count()).toBe(18);
    });
    it("undefined", function () {
        expect(Users.AddRange([undefined, undefined]).Count()).toBe(18);
    });
});
describe("Aggregate", function () {
    it("string", function () {
        expect(["a", "b", "c", "d"].Aggregate(function (a, v) { return a + "-" + v; }, "x")).toBe("x-a-b-c-d");
    });
    it("number", function () {
        expect([1, 2, 3, 4].Aggregate(function (a, v) { return a + v; }, 0)).toBe(10);
    });
});
describe("All", function () {
    var data = [{ id: 1 }, { id: 1 }, { id: 1 }];
    it("all", function () {
        expect(data.Clone().All(function (a) { return a.id === 1; })).toBe(true);
    });
    it("all", function () {
        expect(data.Clone().Add({ id: 1 }).All(function (a) { return a.id === 1; })).toBe(true);
    });
    it("not all", function () {
        expect(data.Clone().Add({ id: 2 }).All(function (a) { return a.id === 1; })).toBe(false);
    });
});
describe("Any", function () {
    it("any", function () {
        expect(Users.Any()).toBe(true);
    });
    it("empty", function () {
        expect([].Any()).toBe(false);
    });
    it("age > 70", function () {
        expect(Users.Any(function (x) { return x.Age > 70; })).toBe(true);
    });
    it("age > 90", function () {
        expect(Users.Any(function (x) { return x.Age > 90; })).toBe(false);
    });
    it("age < 18", function () {
        expect(Users.Any(function (x) { return x.Age < 18; })).toBe(false);
    });
});
describe("Average", function () {
    var data = [10, 5];
    it("string", function () {
        expect(["a", "b"].Average()).toEqual(NaN);
    });
    it("average", function () {
        expect(data.Average()).toBe(7.5);
    });
    it("average", function () {
        expect(data.Average(function (a) { return a; })).toBe(7.5);
    });
});
describe("Clear", function () {
    it("clear", function () {
        expect(Users.Clear().Count()).toBe(0);
    });
});
describe("Clone", function () {
    it("array ref test", function () {
        var clone = Users.Clone();
        expect(clone).not.toBe(Users);
        expect(clone.length).toBe(Users.length);
    });
    it("item ref test", function () {
        var clone = Users.Clone();
        clone.ForEach(function (f, i) {
            expect(clone[i]).toBe(Users[i]);
        });
    });
});
describe("Concat", function () {
    it("concat", function () {
        expect([1].Concat([2])).toEqual([1, 2]);
    });
});
describe("Contains", function () {
    it("number - contains", function () {
        expect(Numbers.Contains(55)).toBe(true);
    });
    it("number dont contains", function () {
        expect(Numbers.Contains(666)).toBe(false);
    });
    it("string - contains", function () {
        expect(Fruits.Contains("Apple")).toBe(true);
    });
    it("string dont contains", function () {
        expect(Fruits.Contains("666")).toBe(false);
    });
    it("object - contains", function () {
        var user = new User(666);
        expect(Users.Add(user).Contains(user)).toBe(true);
    });
    it("object dont contains", function () {
        var user = new User(666);
        expect(Users.Contains(user)).toBe(false);
    });
});
describe("Count", function () {
    it("all", function () {
        expect(Users.Count()).toBe(16);
    });
    it("age > 80", function () {
        expect(Users.Count(function (x) { return x.Age > 80; })).toBe(2);
    });
    it("age < 18", function () {
        expect(Users.Count(function (x) { return x.Age < 18; })).toBe(0);
    });
});
describe("Distinct", function () {
    it("numbers", function () {
        expect(Numbers.AddRange(Numbers).Distinct().Count()).toBe(13);
    });
    it("strings", function () {
        expect(Fruits.AddRange(Fruits).Distinct().Count()).toBe(15);
    });
    it("booleans", function () {
        expect(Booleans.AddRange(Booleans).Distinct().Count()).toBe(2);
    });
});
describe("FindIndex", function () {
    it("find", function () {
        expect(Users.FindIndex(function (f) { return f.Age == 55; })).toBe(3);
    });
    it("dont find", function () {
        expect(Users.FindIndex(function (f) { return f.Age == 666; })).toBe(-1);
    });
});
describe("FindLastIndex", function () {
    it("find", function () {
        expect(Users.FindLastIndex(function (f) { return f.Age == 55; })).toBe(4);
    });
    it("dont find", function () {
        expect(Users.FindLastIndex(function (f) { return f.Age == 666; })).toBe(-1);
    });
});
describe("First", function () {
    it("match", function () {
        expect(Users.First().Id).toBe(1);
    });
    it("match with selector", function () {
        expect(Users.First(function (f) { return f.Age == 22; }).Id).toBe(3);
    });
    it("no match", function () {
        expect(function () { return Users.First(function (f) { return f.Age == 666; }); }).toThrow();
    });
});
describe("FirstOrDefault", function () {
    it("match", function () {
        expect(Users.FirstOrDefault().Id).toBe(1);
    });
    it("match boolean", function () {
        expect([true, false].FirstOrDefault()).toBe(true);
        expect([false, true].FirstOrDefault()).toBe(false);
    });
    it("match number (boolean)", function () {
        expect([0, 1].FirstOrDefault()).toBe(0);
        expect([1, 0].FirstOrDefault()).toBe(1);
    });
    it("match with selector", function () {
        expect(Users.FirstOrDefault(function (f) { return f.Age == 22; }).Id).toBe(3);
    });
    it("no match", function () {
        expect(Users.FirstOrDefault(function (f) { return f.Age == 666; })).toBeNull();
    });
});
describe("ForEach", function () {
    it("breaks on return true", function () {
        var result = new Array();
        Users.ForEach(function (f) {
            result.push(f);
            return true;
        });
        expect(result.length).toBe(1);
        expect(result[0]).toBe(Users[0]);
    });
    it("dont breaks on return false", function () {
        var result = new Array();
        Users.ForEach(function (f) {
            result.push(f);
            return false;
        });
        expect(result).toEqual(Users);
    });
    it("dont breaks on return", function () {
        var result = new Array();
        Users.ForEach(function (f) {
            result.push(f);
            return;
        });
        expect(result).toEqual(Users);
    });
});
describe("Get", function () {
    it("match", function () {
        expect(Users.Get(4).Id).toBe(5);
    });
    it("match boolean", function () {
        expect([true].Get(0)).toBe(true);
        expect([false].Get(0)).toBe(false);
    });
    it("match number (boolean)", function () {
        expect([0].Get(0)).toBe(0);
        expect([1].Get(0)).toBe(1);
    });
    it("no match", function () {
        expect(Users.Get(666)).toBeNull();
    });
});
describe("GroupBy", function () {
    it("booleans", function () {
        var result = Booleans.GroupBy(function (g) { return g; });
        expect(result.true.length).toBe(5);
        expect(result.false.length).toBe(6);
    });
    it("objects", function () {
        var test = [new User(1, "A"), new User(2, "B"), new User(3, "A")];
        var result = test.GroupBy(function (g) { return g.FirstName; });
        expect(result.A.length).toBe(2);
        expect(result.B.length).toBe(1);
    });
});
describe("Insert", function () {
    var user = new User(1);
    it("inserts", function () {
        var length = Users.length;
        Users.Insert(user, 2);
        expect(Users.length).toBe(length + 1);
        expect(Users.Get(2)).toBe(user);
    });
});
describe("Intersect", function () {
    it("intersects", function () {
        var other = Users.Where(function (w) { return w.Age == 55; });
        var result = Users.Intersect(other);
        expect(result.length).toBe(2);
        expect(result[0].Age).toBe(55);
        expect(result[1].Age).toBe(55);
    });
    it("dont intersects", function () {
        var other = [new User(666)];
        var result = Users.Intersect(other);
        expect(result.length).toBe(0);
    });
});
describe("Join", function () {
    it("joins", function () {
        expect([1, 11, 111].Join("#")).toBe("1#11#111");
    });
    it("joins with selector", function () {
        expect(Users.Join("#", function (i) { return i.Id; })).toBe("1#2#3#4#5#6#7#8#9#10#11#12#13#14#15#16");
    });
});
describe("JSLinq", function () {
    it("should return empty array", function () {
        expect(JSLinq()).toEqual([]);
        expect(JSLinq(null)).toEqual([]);
        expect(JSLinq(undefined)).toEqual([]);
    });
    it("should return array", function () {
        expect(JSLinq(1)).toEqual([1]);
        expect(JSLinq("2")).toEqual(["2"]);
    });
    it("should return array", function () {
        var array = [1, 3, 4];
        expect(JSLinq(array)).toBe(array);
    });
});
describe("Last", function () {
    it("match", function () {
        expect(Users.Last().Id).toBe(16);
    });
    it("match with selector", function () {
        expect(Users.Last(function (f) { return f.Age == 22; }).Id).toBe(9);
    });
    it("no match", function () {
        expect(function () { return Users.Last(function (f) { return f.Age == 666; }); }).toThrow();
    });
});
describe("LastOrDefault", function () {
    it("match", function () {
        expect(Users.LastOrDefault().Id).toBe(16);
    });
    it("match boolean", function () {
        expect([false, true].LastOrDefault()).toBe(true);
        expect([true, false].LastOrDefault()).toBe(false);
    });
    it("match number (boolean)", function () {
        expect([1, 0].LastOrDefault()).toBe(0);
        expect([0, 1].LastOrDefault()).toBe(1);
    });
    it("match with selector", function () {
        expect(Users.LastOrDefault(function (f) { return f.Age == 22; }).Id).toBe(9);
    });
    it("no match", function () {
        expect(Users.LastOrDefault(function (f) { return f.Age == 666; })).toBe(null);
    });
});
describe("Max", function () {
    it("string", function () {
        expect(["a", "b"].Max()).toBe("b");
    });
    it("number", function () {
        expect([1, 10, 5].Max()).toBe(10);
    });
    it("number with selector", function () {
        expect([1, 10, 5].Max(function (a) { return a; })).toBe(10);
    });
    it("max with negative numbers", function () {
        expect([1, -10, 5].Max()).toBe(5);
    });
    it("max with negative numbers and with selector", function () {
        expect([1, 10, -5].Max(function (a) { return a; })).toBe(10);
    });
    it("empty", function () {
        expect([].Max()).toBe(null);
    });
    it("empty with selector", function () {
        expect([].Max(function (a) { return a; })).toBe(null);
    });
});
describe("Min", function () {
    it("string", function () {
        expect(["a", "b"].Min()).toBe("a");
    });
    it("number", function () {
        expect([1, 10, 5].Min()).toBe(1);
    });
    it("number with selector", function () {
        expect([1, 10, 5].Min(function (a) { return a; })).toBe(1);
    });
    it("min with negative numbers", function () {
        expect([1, -10, 5].Min()).toBe(-10);
    });
    it("min with negative numbers and with selector", function () {
        expect([1, 10, -5].Min(function (a) { return a; })).toBe(-5);
    });
    it("empty", function () {
        expect([].Min()).toBe(null);
    });
    it("empty with selector", function () {
        expect([].Min(function (a) { return a; })).toBe(null);
    });
});
describe("Move", function () {
    it("move", function () {
        var length = Users.length;
        var user1 = Users[1];
        var user5 = Users[5];
        Users.Move(1, 5);
        expect(Users[5]).toBe(user1);
        expect(Users[4]).toBe(user5);
        expect(Users.length).toBe(length);
    });
});
describe("Object Pollution Tests", function () {
    it("should not iterate over object members", function () {
        var array = [1, 2, 3];
        var result = new Array();
        for (var item in array) {
            result.Add(item);
        }
        expect(result.length).toBe(3);
        expect(result[0]).toBe("0");
        expect(result[1]).toBe("1");
        expect(result[2]).toBe("2");
    });
    describe("IArrayState", function () {
        describe("Order", function () {
            it("should have Order defined", function () {
                var array = [1, 2, 3];
                expect(array._JSLinq.Order).toBeDefined();
            });
            it("should not iterate over Order members", function () {
                var array = [1, 2, 3].OrderBy(function (o) { return o; });
                var result = new Array();
                for (var item in array) {
                    result.Add(item);
                }
                expect(result._JSLinq.Order).toBeDefined();
                expect(result.length).toBe(3);
                expect(result[0]).toBe("0");
                expect(result[1]).toBe("1");
                expect(result[2]).toBe("2");
            });
        });
    });
});
describe("OrderBy", function () {
    it("number", function () {
        var data = [1, 3, 2];
        expect(data.OrderBy(function (o) { return o; })).toEqual([1, 2, 3]);
    });
    it("number with negativ", function () {
        var data = [1, -3, 2];
        expect(data.OrderBy(function (o) { return o; })).toEqual([-3, 1, 2]);
    });
    it("string", function () {
        var data = ["a", "c", "b"];
        expect(data.OrderBy(function (o) { return o; })).toEqual(["a", "b", "c"]);
    });
    // it("string mixed", function () {
    //     const data = ["a", "-3", "01", "1", "_", "c", "C", "b"];
    //     expect(data.OrderBy(o => o)).toEqual(["_", "-3", "01", "1", "a", "b", "c", "C"]);
    // });
});
describe("OrderByDescending", function () {
    it("number", function () {
        var data = [1, 3, 2];
        expect(data.OrderByDescending(function (o) { return o; })).toEqual([3, 2, 1]);
    });
    it("number with negativ", function () {
        var data = [1, -3, 2];
        expect(data.OrderByDescending(function (o) { return o; })).toEqual([2, 1, -3]);
    });
    it("string", function () {
        var data = ["a", "c", "b"];
        expect(data.OrderByDescending(function (o) { return o; })).toEqual(["c", "b", "a"]);
    });
    // it("string mixed", function () {
    //     const data = ["a", "-3", "01", "1", "_", "c", "C", "b"];
    //     expect(data.OrderByDescending(o => o)).toEqual(["_", "-3", "01", "1", "a", "b", "c", "C"].Reverse());
    // });
});
describe("Range", function () {
    var data;
    beforeEach(function () {
        data = [1, 2, 3, 4];
    });
    it("range zero count", function () {
        expect(data.Range(1, 0)).toEqual([]);
    });
    it("range", function () {
        expect(data.Range(1, 2)).toEqual([2, 3]);
    });
    it("range bof", function () {
        expect(data.Range(-50, 2)).toEqual([1, 2]);
    });
    it("range eof", function () {
        expect(data.Range(50, 2)).toEqual([]);
    });
});
describe("Remove", function () {
    it("apple", function () {
        expect(Fruits.Remove("Apple").Count()).toBe(14);
    });
    it("unknown", function () {
        expect(function () {
            Fruits.Remove("unknown");
        }).not.toThrow();
        expect(Fruits.Count()).toBe(15);
    });
    it("63", function () {
        expect(Numbers.Remove(63).Count()).toBe(13);
    });
    it("user", function () {
        expect(Users.Remove(Users[3]).Count()).toBe(15);
    });
    it("null", function () {
        expect(function () {
            Users.Remove(null);
        }).not.toThrow();
        expect(Users.Count()).toBe(16);
    });
});
describe("RemoveAll", function () {
    it("removeAll", function () {
        expect(Users.RemoveAll().length).toBe(0);
        expect(Users.length).toBe(0);
    });
    it("removeAll with selector", function () {
        expect(Users.length).toBe(16);
        expect(Users.RemoveAll(function (r) { return r.Age == 22; }).length).toBe(14);
        expect(Users.length).toBe(14);
    });
});
describe("RemoveAt", function () {
    var data;
    beforeEach(function () {
        data = [1, 2, 3, 4];
    });
    it("removeAt", function () {
        expect(data.RemoveAt(1)).toEqual([1, 3, 4]);
        expect(data.length).toBe(3);
    });
    it("removeAt bof", function () {
        expect(data.RemoveAt(-50)).toEqual(data);
    });
    it("removeAt eof", function () {
        expect(data.RemoveAt(50)).toEqual(data);
    });
});
describe("RemoveRange", function () {
    var data;
    beforeEach(function () {
        data = [1, 2, 3, 4];
    });
    it("removeRange zero count", function () {
        expect(data.RemoveRange(1, 0)).toEqual(data);
        expect(data.length).toBe(4);
    });
    it("removeRange", function () {
        expect(data.RemoveRange(1, 2)).toEqual([1, 4]);
        expect(data.length).toBe(2);
    });
    it("removeRange bof", function () {
        expect(data.RemoveRange(-50, 2)).toEqual([3, 4]);
        expect(data.length).toBe(2);
    });
    it("removeRange eof", function () {
        expect(data.RemoveRange(50, 2)).toEqual(data);
        expect(data.length).toBe(4);
    });
});
describe("Repeat", function () {
    var data;
    beforeEach(function () {
        data = [1, 2, 3, 4];
    });
    it("Repeat zero count", function () {
        expect(data.Repeat(666, 0)).toEqual(data);
    });
    it("Repeat", function () {
        expect(data.Repeat(666, 2)).toEqual([1, 2, 3, 4, 666, 666]);
    });
    it("Repeat bof", function () {
        expect(data.Repeat(666, -50)).toEqual(data);
    });
    it("Repeat eof", function () {
        expect(data.Repeat(666, 50)).toEqual(data);
    });
});
describe("Reverse", function () {
    var data;
    beforeEach(function () {
        data = [1, 2, 3, 4];
    });
    it("Repeat", function () {
        expect(data.Reverse()).toEqual([4, 3, 2, 1]);
    });
});
describe("Select", function () {
    it("match", function () {
        expect(Numbers.Select(function (s) { return s; })).toEqual([76, 122, 63, 782, 85, 87, 55, 63, 35, 1, -10, 63.2, 627, 1000]);
    });
    it("with selector", function () {
        expect(Users.Select(function (s) { return s.Id; })).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    });
});
describe("SelectMany", function () {
    var Test = /** @class */ (function () {
        function Test(name, items) {
            this.name = name;
            this.items = items;
        }
        return Test;
    }());
    var data = [
        new Test("A1", [
            new Test("A1-1"),
            new Test("A1-2", [
                new Test("A1-2-1"),
            ]),
            new Test("A1-3", [
                new Test("A1-3-1", [new Test("A1-3-1-1")])
            ])
        ]),
        new Test("A2")
    ];
    it("SelectMany", function () {
        expect(data.SelectMany(function (s) { return s.items; })).toEqual(data.First().items);
    });
});
describe("SequenceEqual", function () {
    describe("simple", function () {
        it("same", function () {
            expect(Numbers.SequenceEqual(Numbers)).toBe(true);
        });
        it("match", function () {
            expect(Numbers.SequenceEqual(Numbers.Clone())).toBe(true);
        });
        it("dont match", function () {
            var other = Numbers.Clone();
            other[5] = 555555;
            expect(Numbers.SequenceEqual(other)).toBe(false);
        });
        it("dont match order", function () {
            expect(Numbers.SequenceEqual(Numbers.Clone().Reverse())).toBe(false);
        });
    });
    describe("object", function () {
        it("same", function () {
            expect(Users.SequenceEqual(Users)).toBe(true);
        });
        it("match", function () {
            expect(Users.SequenceEqual(Users.Clone())).toBe(true);
        });
        it("dont match", function () {
            var other = Users.Clone();
            other[5] = new User(5555);
            expect(Users.SequenceEqual(other)).toBe(false);
        });
        it("dont match order", function () {
            expect(Users.SequenceEqual(Users.Clone().Reverse())).toBe(false);
        });
    });
});
describe("Single", function () {
    var data;
    beforeEach(function () {
        data = [1, 2, 3, 3];
    });
    it("match", function () {
        expect([1].Single()).toBe(1);
    });
    it("match with selector", function () {
        expect(data.Single(function (f) { return f == 2; })).toBe(2);
    });
    it("empty", function () {
        expect(function () { return [].Single(); }).toThrow();
    });
    it("no match", function () {
        expect(function () { return data.Single(function (f) { return f == 666; }); }).toThrow();
    });
    it("dublicate match", function () {
        expect(function () { return data.Single(function (f) { return f == 3; }); }).toThrow();
    });
});
describe("SingleOrDefault", function () {
    var data;
    beforeEach(function () {
        data = [1, 2, 3, 3];
    });
    it("match", function () {
        expect([1].SingleOrDefault()).toBe(1);
    });
    it("match with selector", function () {
        expect(data.SingleOrDefault(function (f) { return f == 2; })).toBe(2);
    });
    it("empty", function () {
        expect([].SingleOrDefault()).toBe(null);
    });
    it("no match", function () {
        expect(data.SingleOrDefault(function (f) { return f == 666; })).toBe(null);
    });
    it("dublicate match", function () {
        expect(function () { return data.SingleOrDefault(function (f) { return f == 3; }); }).toThrow();
    });
});
describe("Skip", function () {
    var data = [1, 2, 3, 4];
    it("skip zero count", function () {
        expect(data.Skip(0)).toEqual(data);
    });
    it("skip", function () {
        expect(data.Skip(2)).toEqual([3, 4]);
    });
    it("skip bof", function () {
        expect(data.Skip(-50)).toEqual(data);
    });
    it("skip eof", function () {
        expect(data.Skip(50)).toEqual([]);
    });
});
describe("Sum", function () {
    it("sum", function () {
        expect(["a", "b"].Sum()).toBe("0ab");
    });
    it("sum", function () {
        expect([10, 5].Sum()).toBe(15);
    });
    it("sum", function () {
        expect([10, 5].Sum(function (a) { return a; })).toBe(15);
    });
    it("sum", function () {
        expect([-10, 5].Sum(function (a) { return a; })).toBe(-5);
    });
    it("sum", function () {
        expect([10, -5].Sum(function (a) { return a; })).toBe(5);
    });
    it("sum", function () {
        expect([].Sum(function (a) { return a; })).toBe(0);
    });
});
describe("Take", function () {
    var data = [1, 2, 3, 4];
    it("take zero count", function () {
        expect(data.Take(0)).toEqual([]);
    });
    it("take", function () {
        expect(data.Take(2)).toEqual([1, 2]);
    });
    it("take bof", function () {
        expect(data.Take(-50)).toEqual([]);
    });
    it("take eof", function () {
        expect(data.Take(50)).toEqual(data);
    });
});
describe("TakeWhile", function () {
    var data = [1, 2, 3, 4];
    it("take", function () {
        expect(data.Clone().TakeWhile(function (t) { return t < 3; })).toEqual([1, 2]);
    });
    it("take all", function () {
        expect(data.Clone().TakeWhile(function (t) { return true; })).toEqual(data);
    });
    it("take none", function () {
        expect(data.Clone().TakeWhile(function (t) { return false; })).toEqual([]);
    });
});
describe("ThenBy", function () {
    // it("Order is undefined", function () {
    //     expect([]._linq4JS.Order).toBe(undefined);
    // });
    // it("error when OrderBy not called first", function () {
    //     expect(() => [].ThenBy(o => o)).toThrow();
    // });
    it("ThenBy", function () {
        expect(Users.OrderBy(function (o) { return o.Age; })
            .ThenBy(function (o) { return o.Id; })
            .Select(function (s) { return s.Age + "-" + s.Id; }))
            .toEqual(["19-8", "22-3", "22-9", "29-13", "38-7", "48-16", "49-1", "54-6", "55-4", "55-5", "56-12", "58-15", "62-2", "73-11", "81-14", "85-10"]);
    });
});
describe("ThenByDescending", function () {
    // it("Order is undefined", function () {
    //     expect([]._linq4JS.Order).toBe(undefined);
    // });
    // it("error when OrderBy not called first", function () {
    //     expect(() => [].ThenByDescending(o => o)).toThrow();
    // });
    it("ThenByDescending", function () {
        expect(Users.OrderBy(function (o) { return o.Age; })
            .ThenByDescending(function (o) { return o.Id; })
            .Select(function (s) { return s.Age + "-" + s.Id; }))
            .toEqual(["19-8", "22-9", "22-3", "29-13", "38-7", "48-16", "49-1", "54-6", "55-5", "55-4", "56-12", "58-15", "62-2", "73-11", "81-14", "85-10"]);
    });
});
describe("ToDictionary", function () {
    it("objects", function () {
        var data = [new User(1, "A"), new User(2, "B"), new User(3, "A")];
        var result = data.ToDictionary(function (k) { return k.FirstName; }, function (v) { return v.Id; });
        expect(result.A).toEqual([1, 3]);
        expect(result.B).toEqual([2]);
    });
});
describe("Union", function () {
    it("Union", function () {
        expect([1].Union([1, 2])).toEqual([1, 2]);
    });
});
describe("Where", function () {
    it("age > 70", function () {
        expect(Users.Where(function (x) { return x.Age > 70; }).Count()).toEqual(3);
    });
    it("age > 70 && id > 10", function () {
        expect(Users.Where(function (x) { return x.Age > 70 && x.Id > 10; }).Count()).toEqual(2);
    });
    it("age > 70 && firstname.length > 6", function () {
        expect(Users.Where(function (x) { return x.Age > 70 && x.FirstName.length > 6; }).Count()).toEqual(1);
    });
    it("name contains 'in'", function () {
        expect(Users.Where(function (x) { return x.FirstName.match(/in/) != null; }).Count()).toEqual(4);
    });
});
describe("Zip", function () {
    function selector(f, s) {
        return (f || "0") + "-" + (s || "0");
    }
    ;
    it("same length", function () {
        var data = [1, 2, 3];
        var other = [4, 5, 6];
        expect(data.Zip(other, selector)).toEqual(['1-4', '2-5', '3-6']);
    });
    it("larger length", function () {
        var data = [1, 2, 3];
        var other = [4];
        expect(data.Zip(other, selector)).toEqual(['1-4', '2-0', '3-0']);
    });
    it("lesser length", function () {
        var data = [1];
        var other = [4, 5, 6];
        expect(data.Zip(other, selector)).toEqual(['1-4']);
    });
});
