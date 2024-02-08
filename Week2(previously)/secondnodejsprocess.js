//fs express fetch are

function logResponseBody(jsonBody){
    console.log(jsonBody);
}
function callbackFn(result){
    result.json().then(logResponseBody);
}

var sendObj={
    method:"GET"
};

fetch("http://localhost:3000/handleSum?counter=10",sendObj).then(callbackFn);
//when the fetch is done please call callbackFn