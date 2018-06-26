describe("pow", function() {

    describe("power x to n", function() {

        function makeTest(x) {
            var expected = x * x * x;
            it("while powering " + x + " to 3 result: " + expected, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (var x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    it("while powering to negative number, result is NaN", function() {
        assert(isNaN(pow(2, -1)), "pow(2, -1) not NaN");
    });

    it("while powering to float number, result is NaN", function() {
        assert(isNaN(pow(2, 1.5)), "pow(2, -1.5) not NaN");
    });

    describe("any number except 0, to power 0 equals 1", function() {

        function makeTest(x) {
            it("while powering " + x + " to 0, result: 1", function() {
                assert.equal(pow(x, 0), 1);
            });
        }

        for (var x = -5; x <= 5; x += 2) {
            makeTest(x);
        }

    });

    it("0 power to 0 is  NaN", function() {
        assert(isNaN(pow(0, 0)), "0 power to 0 is not NaN");
    });

});