//node modules folder & package-lock.json is created when I ran "npm i express"
// 15 line of codes is
//express makes easy to write http servers, we can write it iny language java, py, if its js then we use express framework
const express = require('express')
const app = express()
const port = 3000
//https servers need to give a way for END USER to [pass on some information]
// SO the req has everything to do with query params, headers and body
//gpt is passing the i/p(the Q u ask) in the body not queryparams using ?

app.get('/', (req, res) => {
    var n1= req.query.n1;
    console.log(req.query.n2+ "\n"+req.query.n3);
    
    res.send("the sum is "+calSum_FirstN_nos(n1));    
    
})

app.post('/signIn', (req, res)=>{
    res.send("Sucessfuly signed in");
})

//starts ur server & makes sure your server works 24/7
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const calSum_FirstN_nos=(n)=>{
    let s=0;
    for(var i=1; i<=n;i++){
        s+=i;
    }
    return s;
}
 
//itch only : every http req must have a URL, ROUTE & "METHOD" :get put post delete

//whenever u want to send some data to the backend use POST
//u can make servers only with get REQ but that's not ideal.

//THe URL that u'll be hitting will always be send as GET req
// To send post request to server we can use postman 
