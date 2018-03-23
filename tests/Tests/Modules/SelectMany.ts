describe("SelectMany", function () {

    class Test {
        constructor(
            public name: string,
            public items?: Test[]) { }
    }

    const data = [
        new Test("A1", [
            new Test("A1-1"),
            new Test("A1-2", [
                new Test("A1-2-1"),
            ]),
            new Test("A1-3", [
                new Test("A1-3-1",
                    [new Test("A1-3-1-1")])
            ])
        ]),
        new Test("A2")
    ];

    it("SelectMany", function () {
        expect(data.SelectMany(s => s.items)).toEqual(data.First().items);
    });
});