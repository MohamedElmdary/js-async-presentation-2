/**
 * @example
 * the following two examples show how javascript non-blocking code works
*/

/**
 * setTimeout is kind of async function ;which the javascript code won't 
 * wait it till the callback works even if the delay time equals zero !
*/

/**
 * @example
 * output: 
 *          - "outside setTimeout 1"
 *          - "inside setTimeout 1"
*/

function example1() {
    setTimeout(() => {
        console.log("inside setTimeout 1");
    }, 0);

    console.log("outside setTimeout 1");
}
example1();

/**
 * @example
 * output: 
 *          - "outside setTimeout 2, i: 1000000000"
 *          - "inside setTimeout 2"
*/
function example2() {
    setTimeout(() => {
        console.log("inside setTimeout 2");
    }, 0);

    for (var i = 0; i < 1000000000; i++);
    console.log("outside setTimeout 2, i: ", i);
}
// example2();