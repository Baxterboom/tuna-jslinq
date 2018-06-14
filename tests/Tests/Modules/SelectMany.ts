describe("SelectMany", function () {
   
    class Test {
        constructor(
            public name: string,
            public items?: Test1[]) { }
    }

    class Test1 {
        constructor(
            public name: string,
            public items?: Test2[]) { }
    }

    class Test2 {
        constructor(
            public name: string,
            public items?: Test3[]) { }
    }

    class Test3 {
        constructor(
            public name: string,
            public items?: Test[]) { }
    }

    const data = [
        new Test("A1", [
            new Test1("A1-1"),
            new Test1("A1-2", [
                new Test2("A1-2-1"),
            ]),
            new Test1("A1-3", [
                new Test2("A1-3-1",
                    [new Test3("A1-3-1-1")])
            ])
        ]),
        new Test("A2")
    ];

    it("SelectMany", function () {
        expect(data.SelectMany(s => s.items)).toEqual(data.First().items);
    });

    it("SelectMany", function () {
        const result = data.SelectMany(s => s.items).SelectMany(s => s.items).SelectMany(s => s.items);
        expect(result.Count()).toBe(1);
        expect(result.First().name).toEqual("A1-3-1-1");
    });
});