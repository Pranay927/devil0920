//node modules folder & package-lock.json is created when I ran "npm i express"
// 15 line of codes is
//express makes easy to write http servers, we can write it iny language java, py, if its js then we use express framework
const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');
//bodyParser is a external middleWare found in node_modules directory/folder


app.use(bodyParser.json());


 //"YOU CAN HAVE ONLY 1 res.send for a request"

//https servers need to give a way for END USER to [pass on some information]
// SO the req has everything to do with query params, headers and body
//gpt is passing the i/p(the Q u ask) in the body not queryparams using ?

//other WAYS to send DATA to backend server
// we can't send Headers from browser we need something like postman 
//in 95% of the cases we use BODY to send data to a backend server


//MiddleWares can decide whether to pass on the request to the respective handlers or stop it right there req >>  <middleware> >> app.get/post handler
//middlewares can be useful for authentication purposes 
// if next() is called then control gets to get handler

//https://expressjs.com/en/guide/writing-middleware.html#:~:text=Middleware%20functions%20are%20functions%20that,middleware%20succeeding%20the%20current%20middleware.

//example middle ware

//Servers communicate to clients using status codes/ body & headers

// body is returned from server in form of JSON or Text or HTML

let reqsss=1;
const myLogger =  (req, res, next) =>{
    console.log('LOGGED from middleware');
    console.log('No of Reqs that the route: '+reqsss)
    reqsss+=1;
    
    next();//calling next gives control to the next middleware or to next handler
  }
app.use(myLogger);

app.get('/', (req, res) => {
    var n1= req.query.n1;
    // console.log(req.query) 'fine'
    // console.log(req.headers) fine
    // console.log(req.body)//is undefined
    // console.log(req.query.n2+ "\n"+req.query.n3);//?n1=5&n2=10&n3=20
    
    // res.send("the sum using Query Params "+calSum_FirstN_nos(n1));   

    // res.send("the sum from Headers is "+calSum_FirstN_nos(req.headers.h1));
    if(req.body.NfromBody<=1000){
        //text reply from server
        // res.send("The sum from accesing Body input in JSON is :"+calSum_FirstN_nos(req.body.NfromBody));//NOT FEASIBLE if u dont use bodyParser middleware

        //json reply from SERVER
        let N = req.body.NfromBody;

        //always send data in JSON 99%
        res.send(
            {
                "Total sum is" : calSum_FirstN_nos(N),
                "Total product is " : calProduct_FirstN_nos(N),
                "Coder name" :"SPIKKY"

            }
        )

    }

    else{
        res.status(401).send("Bigg number!")
    }

    console.log(req.body);//works now

    //express gives u query and headers convineiently but does not gives body out of the box  that's why body parser

    //by default res.send() gives 200 OK status
    
})

app.get('/htmlfromServer', (req, res)=>{
//     res.send(`<head>
//     <title>
//         Hello from page
//     </title>
// </head>
// <body>
//     <b>Hi  There!</b>
// </body>`)
// OR
    res.sendFile(__dirname+"/index.html")
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
    for(var i=1; i<=n;i++)
        s+=i;
    return s;
}
const calProduct_FirstN_nos=(n)=>{
    let p=1;
    for(var i=1; i<=n;i++)
        p*=i;
    return p;
}
 
//itch only : every http req must have a URL, ROUTE & "METHOD" :get put post delete

//whenever u want to send some data to the backend use POST
//u can make servers only with get REQ but that's not ideal.

//THe URL that u'll be hitting will always be send as GET req
// To send post request to server we can use postman 
