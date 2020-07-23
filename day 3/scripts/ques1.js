console.log("Question 1");

let num=prompt("Enter number");
console.log(num)

let result = function(num=""){
    if(num%2==0){
        console.log("Number entered is "+ num + " and Number is even");
    }
    else{
        console.log("Number entered is "+ num + " and Number is odd0");
    }
    }
result(num);