function asyncAdder(a, b) {
    return new Promise(function (res) {
        setTimeout(function () {
            res(a + b);
        }, 500);
    });
}

let r;

asyncAdder(1, 2)
    .then(function (res) {
        r = res;
        console.log("result from inside: ", r);
    })
    .catch(function (err) {
        console.log("Error: ", err);
    });

console.log("result from outside: ", r);