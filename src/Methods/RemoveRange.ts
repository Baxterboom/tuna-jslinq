JSLinqHelper.NonEnumerable("RemoveRange",
    function <T>(this: T[], start: number, length: number): T[] {
        this.Skip(start).Take(length).ForEach(f => this.Remove(f));
        return this;
    });