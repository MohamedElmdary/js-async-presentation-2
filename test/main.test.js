function asyncAdder(a, b, cb) {

    if (cb) {

        setTimeout(function () {
            cb(a + b);
        }, 500);

    } else {

        return new Promise(function (res) {
            setTimeout(function () {
                res(a + b);
            }, 500);
        });
    }
}

describe("way of testing async code with jest", () => {

    test("Method #1", function (done) {
        asyncAdder(1, 2, function (res) {
            expect(res).toBe(3);
            done();
        });
    });

    test("Method #2", function (done) {
        asyncAdder(1, 2)
            .then(res => {
                expect(res).toBe(3);
                done();
            });
    });

    test("Method #3", async function () {
        let res = await asyncAdder(1, 2);
        expect(res).toBe(3);
    });

    test("Method #1", async function () {
        return expect(await asyncAdder(1, 2)).toBe(3);
    });

});