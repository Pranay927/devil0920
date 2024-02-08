function  count(fI,eI){
    let c=0;
    for(var i=fI;i<=eI;i++ ){
        c+=i;

    }
    return c;
}
function printToScreen(){
    console.log("5 seconds have passed");
}
setTimeout(printToScreen,5*1000);//callbacking printToScreen... 
console.log(count(1,1000));