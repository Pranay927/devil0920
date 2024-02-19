// How to send the request to the index.js(main server)  from secondNodeJSProcess.js file
// fetch "returns a PROMISE"
//  fetch(p1, p2) 
// param 1: URL of the main Node.js process, param 2 : Object

//fetch returns a promise and .json() since are asynch in nature also returns a promise so 2 .then() are used

//we are fetching the algo we have in server using fetch 

//instead of sending req from postman/ browsernto use algo in server, we can hit the route from other node JS process

//both node js processes main and second nodejs must be running inorder to send request.


fetch("http://localhost:3000/?n=555", {
    method: "GET"
}).then((result) => {
    result.json().then((jsonBody) => {
        console.log(jsonBody)
    })
});

//SO one node js can talk to our main Node.js
//week 2.2 Recap start from 1h:40m 