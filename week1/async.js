const fs =require('fs');
function sum(n){
    let sum=0;
    for(var i=1;i<=n;i++){
        sum+=i;
    }
    console.log(sum);
}
function fileIsRead(err,fileContent){
    var ans = sum(fileContent)
    console.log("file is read gave "+ans)
}
fs.readFile("choclate.txt",'utF8',fileIsRead);//callback fileIsRead
//during the process of reading a file I can do a bunch of other things!! 
sum(10); 
sum(12); 
sum(21);
console.log("these are Synchronous tasks....") ;
//It's important to note that during the file reading process, asynchronous tasks are being performed, allowing other code execution (such as calling the sum function) to continue without waiting for the file reading to complete. This demonstrates the non-blocking nature of asynchronous operations in JavaScript.