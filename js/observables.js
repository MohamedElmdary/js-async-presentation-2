var rx = window.rxjs;
var op = window.rxjs.operators


/* var myPromise = fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "GET"
});

rx.from(myPromise)
    .subscribe(
        function (data) {
            console.log(data);

            // console.log("Result: ", data);
        },
        function (err) {
            console.log("Error", err);
        },
        function () {
            console.log("finished");
        }
    ); */






var myOtherPromise = Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
        method: "GET"
    }).then(res => res.json()),
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        method: "GET"
    }),
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
]);

rx.from(myOtherPromise)
    .pipe(
        op.concatAll(),
        op.map(value => value.data ? value.data : value)
    )
    .subscribe(
        function (data) {
            console.log("Result: ", data);
        },
        function (err) {
            console.log("Error", err);
        },
        function () {
            console.log("finished");
        }
    );