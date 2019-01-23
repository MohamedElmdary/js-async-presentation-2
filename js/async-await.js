(async function () {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
            method: "GET"
        });
        console.log("Result: ", res);
    } catch (err) {
        console.log("Error: ", err);
    }
})();

/* (async function () {
    try {
        var res = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/todos/1", {
                method: "GET"
            }),
            axios.get("https://jsonplaceholder.typicode.com/todos/1")
        ]);
        console.log("Result: ", res);
    } catch (err) {
        console.log("Error: ", err);
    }
})(); */