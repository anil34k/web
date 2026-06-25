// for loop = repeat some code a LIMITED amount of times
//synatx = for(initialization; condition; increment/decrement){
//code to be executed
//}

for (let counter = 0; counter <= 10; counter += 2) {
    console.log(counter);
}

for (let i = 1; i <= 20; i++) {
    if (i == 6) {
        continue;  // skip the current iteration
    }
    else{
        console.log(i);
    }
}

//output : 1 2 3 4 5 7 8 9 10 11 12 14 15 16 17 18 19 20 (terminated at i == 13)

for (let i = 1; i <= 20; i++){
    if (i == 13){
        break; // terminate the loop
    }
    console.log(i);
}


//output : 1 2 3 4 5 7 8 9 10 11 12 (terminated at i == 13)