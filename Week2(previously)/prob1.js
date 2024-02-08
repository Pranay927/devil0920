// function callbackfn(){
//     console.log("This is call back function repoting");
    
// }
// function higherOrder(callbackfn){

//     callbackfn();
// }
// higherOrder(callbackfn);


// function higherOrderAsync(cb2){
//     const date =new Date();
//     setTimeout(cb2,date.getUTCDate()*1000);

// }
// function cb2(){
//     console.log("hehehehehe");
// }

// higherOrderAsync(cb2);

//Array map with callback

function mapArray(arr,cb3 ){
    for(var i=0;i<arr.length;i++){
        arr[i]=cb3(i+1);
    }
    console.log(arr);
}

var array= [1,2,3,4,5,6];

function square(x){
    return x*x;
}

mapArray(array,square);