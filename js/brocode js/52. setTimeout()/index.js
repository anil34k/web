// setTimeout() = function in JS that allows you to schedule
//                the execution of a function after an amount of time delay (in milliseconds)
//                times are approximately (varies based on the workload of the js runtime env.)
//                setTimeout(callback, delay);


let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}
