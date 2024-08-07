//Arrays
//Array creation 

const Arr = [1, 2, 3, 4, 5]; 
console.log(Arr);
console.log(Arr[0], Arr[4]);

//Array Methods

Arr.push(6);
console.log(Arr);

Arr.pop();
console.log(Arr);

Arr.shift();
console.log(Arr);

Arr.unshift(1);
console.log(Arr);

const ArrN = Arr.map(function(Arr){
    return Arr*2;
})
console.log(ArrN);

const evenNumbers = ArrN.filter(ArrN => ArrN%2 == 0);
console.log(evenNumbers);

const allSum = ArrN.reduce((sum, cur)=>{
    sum = sum + cur;
    return sum;
})
console.log(allSum);


//Array Iteration 
function arrIter(){
    for(let i =0; i<5; i++){
        console.log(ArrN[i]);
    }
}
arrIter();

ArrN.forEach(ArrN => console.log(ArrN));


// 2D Arrays 

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for(let i =0; i<3; i++){
    for(let j=0; j<3;j++){
        console.log(matrix[i][j]);
    }
}

console.log(matrix[1][2]);