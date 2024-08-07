//Loops
// FOR Loop

for(let i =1; i<=10; i++){
    console.log(i);
}
for(let i= 1; i<=10; i++){
    console.log(5*i);
}

//While Loop

let sum =0; 
let i =1; 
while(i<=10){
    sum += i;
    i++;
}
console.log(sum);

i = 10; 
while(i>0){
    console.log(i);
    i--;
}


//Do while loop

let p = 1;
do {
    console.log(p);
    p++;
}while(p<=5);

function factorial(x){
    let fact=1; 
    do{
        fact *= x;
        x--;
    } while(x>0);
    console.log(fact);
}
factorial(5);

//Nested Loops
let pattern = "";
for(let i =1; i<=5; i++ ){
    for(let j =0; j<i; j++){
        pattern += "*";
    }
    pattern += '\n';
}
console.log(pattern);

//Loop control statements
for(let i =1; i<=10; i++){
    if(i == 5) continue;
    console.log(i);
}
for(let i =1; i<=10; i++){
    if(i == 7) break;
    console.log(i);
}

for(var l=1; l<=5; l++){
    for(var m=0; m<l; m++){
        console.log("*");
    }
    console.log('\n');
}