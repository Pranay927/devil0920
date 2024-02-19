
//fetch lets you send http request to a local host(server) from a  node.js process
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json());
let reqsss = 1;
const myLogger = (req, res, next) => {
    console.log('LOGGED from middleware');
    console.log('No of Reqs that the route: ' + reqsss)
    reqsss += 1;
    next();//calling next gives control to the next middleware or to next handler
}
app.use(myLogger);
//  "SERVERS" CAN TALK TO SERVERS(NODE.JS PROCESSES)
app.get('/', (req, res) => {
    let N = req.query.n;
    res.send({
        sum : calSum_FirstN_nos(N)});
})

app.post('/signIn', (req, res) => {
    res.send("Sucessfuly signed in");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
const calSum_FirstN_nos = (n) => {
    let s = 0;
    for (var i = 1; i <= n; i++)
        s += i;
    return s;
}

