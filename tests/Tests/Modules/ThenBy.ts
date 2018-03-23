describe("ThenBy", function () {
    // it("Order is undefined", function () {
    //     expect([]._linq4JS.Order).toBe(undefined);
    // });

    // it("error when OrderBy not called first", function () {
    //     expect(() => [].ThenBy(o => o)).toThrow();
    // });

    it("ThenBy", function () {
        expect(Users.OrderBy(o => o.Age)
            .ThenBy(o => o.Id)
            .Select(s => s.Age + "-" + s.Id))
            .toEqual(["19-8", "22-3", "22-9", "29-13", "38-7", "48-16", "49-1", "54-6", "55-4", "55-5", "56-12", "58-15", "62-2", "73-11", "81-14", "85-10"]);
    });
});