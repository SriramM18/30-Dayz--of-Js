//If-Else(Ternary Operators)
function checkNumber(num) {
    let result = num > 0 ? "positive" : num < 0 ? "negative" : "zero";
    console.log(num + " is a " + result + " number.");
  }
  
  // Example usage:
  checkNumber(10);  
  checkNumber(-5);  
  checkNumber(0);  

  //One more way 
  function Check(num){
    if(num>0){
        console.log(positive);
    }
    else if(num<0){
        console.log(Negative);
    }
    else{
        console.log(Zero);
    }
  }

  function Voteage(age){
    if(age >= 18){
        console.log("Yor are elligible to vote");
    }
    else{
        console.log("You are not elligible to vote");
    }
  }
  Voteage(21);
  Voteage(17);

  //Nested If-Else
  
  function Higher(a, b, c){
    if(a >=b && a>=c){
        high = a;
    }
    else if(b>=a && b>=c){
        high = b;
    }
    else{
        high =c;
    }
    console.log(high);
  }
  Higher(12, 15, 13);
  Higher(12, 13, 15);

  //Switch Case

  function SwitchCase(week){
    switch(week){
        case 1:
            console.log("Monday");
            break;
        
        case 2:
            console.log("Tuesday");
            break;

        case 3:
            console.log("Wednesday");
            break;
            
        case 4:
            console.log("Thursday");
            break;

        case 5:
            console.log("Friday");
            break;

        case 6:
            console.log("Saturday");
            break;

        case 7:
            console.log("SUnday");
            break;

        default:
            console.log("You can only choose from 1-7");
    }
}

SwitchCase(3);

function Grade(marks){
    let score = marks;
    switch(true){

    case score >= 90 : 
        console.log("Grade A")
        break;

    case score >= 80 && score <90 : 
        console.log("Grade B")
        break;

    case score >= 70 && score < 80 : 
        console.log("Grade C")
        break;

    case score >= 60 && score<70: 
        console.log("Grade D")
        break;

    case score <90 : 
        console.log("Grade F")
        break;

    default :
    console.log("You should try only from 0 -100");

    }

}
Grade(78);

//conditional Ternary 

function EvenOdd(num){
    let res = (num%2 == 0) ? "Even" : "Odd";
    console.log(res);
}
EvenOdd(18);

function leapYear(year){
    let res;
    if(((year% 4 ===0) && (year %100 !== 0))){
        res = "Leap Year"
    }
    else if(year%400 === 0){
        res = "Leap Year";
    }
    else{
        res = "Not a Leap Year";
    }
    console.log(res);
}
leapYear(2008);