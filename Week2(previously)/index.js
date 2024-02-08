//node index.js to run
//fs is an external library to rad all the content from a file
//use express boiler plate
const express = require('express');
const app = express();
const port = 5000
var bodyParser = require('body-parser')
let noOfRequests=0;

app.use(bodyParser.json())

//extract the body from req.body to send input to the request

/*function middleware1(req,res,next){
    noOfRequests++;
    console.log("noOfRequests "+noOfRequests);
    console.log("from inside middle wear "+req.headers.counter);

    // res.send("Error occures");

    next();
    
    //why calling next makes sure the control gets to rquest handler...see what happs if you don't call

}

app.use(middleware1);*/

function sum(counter) {
    var s = 0;
    for (var i = 1; i <= counter; i++) {
        s += i;
    }
    return s;
}
function mul(counter) {
    var m = 1;
    for (var i = 1; i <= counter; i++) {
        m =m*i;
    }
    return m;
}

function isPrime(req, res) {
    var p = parseInt(req.query.p, 10);
    if (p <= 1) {
        res.send(p + " is not a prime number");
        return;
    }

    for (var i = 2; i <= p/2; i++) {
        if (p % i === 0) {
            res.send(p + " is not a prime number");
            return;
        }
    }

    res.send(p + " is a prime number");
}

function handleFirstRequest(req, res) {
    var counter = parseInt(req.query.counter);//counter from query

    //counter from headers
    // var counter =req.headers.counter;

    // console.log(req.body); //from body



        // var counter =req.body.counter;

        var theSum = sum(counter);
        // var theProduct = mul(counter);
        // var answer = "the sum is " + theSum;

        //structured way to do it

        var answerObject = {
            sumof: theSum,
            // product: theProduct
        };
    
        // res.status(401).send(answer);
        res.status(200).send(answerObject);


}



function createUser(req,res) {
    res.send("hellloooooo smartasssssss");
}


app.get('/handleSum', handleFirstRequest);
// app.post('/handleSum', handleFirstRequest);

//response in the form og html
function givePage(req, res){
    res.send(`<head>
    <title>
        Hellooooo
    </title>
    <body>
        <h1>hi there</h1>
    </body>
</head>`)//or res.sendFile(__dirname+"/index.html")
}
app.get('/', givePage)

app.get('/createUser', createUser); 

app.delete('/prime',isPrime);

//Cannot GET /createUser cuz u don;t have get handler for createUser


// if you get request at '/' then go to handlrFirstRequest
//handlefirst is an asynch fn, but app.get is synch fn

function started() {
    console.log(`Example app listening on port ${port}`)
}
app.listen(port, started)

//  http://localhost:3000/handleSum?counter=3