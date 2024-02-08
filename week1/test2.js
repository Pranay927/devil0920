function cmplx(n){
    var sum=0;
    for(var i=0;i<n;i++){
        sum+=i;
    }
    return sum;
}
var starT=new Date().getTime();
const a=cmplx(1000000000);//node js is single threaded 
console.log(a);
var endT=new Date().getTime();
console.log((endT-starT)/1000)