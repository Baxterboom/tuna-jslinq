describe("SequenceEqual", function () {

    describe("simple", function () {
        it("same", function () {
            expect(Numbers.SequenceEqual(Numbers)).toBe(true);
        });

        it("match", function () {
            expect(Numbers.SequenceEqual(Numbers.Clone())).toBe(true);
        });

        it("dont match", function () {
            const other = Numbers.Clone();
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
            const other = Users.Clone();
            other[5] = new User(5555);
            expect(Users.SequenceEqual(other)).toBe(false);
        });

        it("dont match order", function () {
            expect(Users.SequenceEqual(Users.Clone().Reverse())).toBe(false);
        });
    });
});