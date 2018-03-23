describe("ThenByDescending", function () {
    // it("Order is undefined", function () {
    //     expect([]._linq4JS.Order).toBe(undefined);
    // });

    // it("error when OrderBy not called first", function () {
    //     expect(() => [].ThenByDescending(o => o)).toThrow();
    // });

    it("ThenByDescending", function () {
        expect(Users.OrderBy(o => o.Age)
            .ThenByDescending(o => o.Id)
            .Select(s => s.Age + "-" + s.Id))
            .toEqual(["19-8", "22-9", "22-3", "29-13", "38-7", "48-16", "49-1", "54-6", "55-5", "55-4", "56-12", "58-15", "62-2", "73-11", "81-14", "85-10"]);
    });
});