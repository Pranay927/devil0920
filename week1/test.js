var users = [{name: "Spikky", age:20},
{name:"Tyler Durden", age:35},
{name:"tillu", age:28}]
for(var i=0; i<users.length;i++)
{
    console.log("my name is "+users[i].name+" Age is "+users[i].age);
    
}
function sum(startIndex, endIndex )
{
    var s=0;
    for(var i=startIndex;i<endIndex+1;i++)
    {
        s+=i;
    }
    return s;
}
var sum = sum(1,2)
console.log(sum); 

function add(n1,n2)
{
    return n1+n2;
}
function multiply(n1,n2)
{
    return n1*n2;
}
function divide(n1,n2)
{
    return n1/n2;
}
function subtract(n1,n2)
{
    return n1-n2;
}
//giving fn as an i/p to the fn
function doArithmetic(n1, n2,arithmeticFn){
    return arithmeticFn(n1,n2);
}
var answer = multiply(9,8)
console.log(answer)
console.log(doArithmetic(1000,100,divide))

function createPattern(rows)
{
    for(var i=0;i<rows;i++)
    { 
        var str="";
        for(var j=0;j<i+1;j++)
        {
            str+="* "
        }
        console.log(str);
    }
    return str;
}
createPattern(4);
console.log("Other pattern");
// function starryPattern(r)
//     {
//         for(var i=0;i<r;i++)
//         {
//             if(i%2==0)
//                 continue; //not break
//             str="";
//             for(var j=0;j<i+1;j++)
//             {
//                 str+="* ";
//             }
//             console.log(str);
//         }
//         return str;
//     }
// starryPattern(10);
//takes no as input and pattern as output
//other way for starryPattern
function starLine(n)
{
    var ans="";
    for(var i=0;i<n;i++){
        ans+="* * "
    }
    console.log(ans);
}
function starryPattern(n){
    for(var i=0;i<n;i++){
        starLine(i);
    }
}
console.log(starryPattern(10));
