//node modules folder & package-lock.json is created when I ran "npm i express"
// 15 line of codes is
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    
    res.send("the sum is "+calSum_FirstN_nos(100));    
    
})

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
