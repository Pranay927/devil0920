var counter=0 ;
function print(){
     console.clear();
     counter+=1;
     console.log(counter);
}
setInterval(print,1000)//calls the function print evry 1 sec or 1000ms

//since print is callback fn it doent loop into infinity it does other tasks 
var counter2 =0;
for(var i=0; i<100;i++){
    counter2+=1;
}
//if you put i<1000000000000 then it'll ignore all async tasks and gets occupied with the synch task until it becomes idle //its async doesnt mean it is doing both or multi-tasking 
console.log(counter2);