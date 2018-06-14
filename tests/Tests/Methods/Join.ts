describe("Join", function () {
    it("joins", function () {
        expect([1, 11, 111].Join("#")).toBe("1#11#111");
    });

    it("joins with selector", function () {
        expect(Users.Join("#", i => i.Id)).toBe("1#2#3#4#5#6#7#8#9#10#11#12#13#14#15#16");
    });
});