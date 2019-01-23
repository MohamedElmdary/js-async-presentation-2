/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {Function} cb 
 */
function asyncAdder(a, b, cb) {
    setTimeout(function () {
        cb(a + b);
    }, 500);
}

var r;

asyncAdder(1, 2, function (res) {
    r = res;
    console.log("result from inside: ", r);
});

console.log("result from outside: ", r);