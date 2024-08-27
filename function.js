//what is a function
/* a function is anything that can be reused
 over and oiver and in code function 
 a fuction can be declared in three ways namely :function Declaration ,function expression and fat arrow function//
 arrow function
 */ //methods are components that can be reused
/* the only special charcters that can be used in naming variables and function are _ and $
 function declaration>>this is where the function
  is declared and given a function name ,brackets whre the parameters go 
 and curly brackets where the code goes
 parameters>>are placeholders for any argumentr that will be used in a function 
 <this is where the arguments are passed to by reference or value .
 arguments>>are the actual values passed to the the parameters */
/*  function name(parameters){
    code to be executed
} */

/* the return statement is used to return any value specified in its path and also terminates the function 
and also it is used to solve the scoping issue

calling a function:
a function can be called in two ways namely :function call and function invocation
function call>>is when a function is called using the function name
function createNumberOne(){
    console.log("thisis where the code goes to ");
}
createNumberOne();

function invocation>>is when a function is called using the function reference */

/* function calcSum(num1,num2){
    return(num1*num2) ;
    
}
console.log(calcSum(3,4)); //calls the function block
console.log(calcSum(6,4)); 
calcSum(9,4)
calcSum(12,4) */
/* 
function expression>>this is where a function is assignmned a varable  */
//we dont need a function name but when we need the function to be used we call the variable
/* let sumNumber = function (num1, num2) {
  return num1 * num2;
};
console.log(sumNumber(6, 4 */

/* fat arrow function>>this is where a function is declared using the arrow operator */
//it is used to declare a function in a single line

/* start with the brackets then the fat arrow then the curly brackets(eliminate the function and the function name
    the fat arrow replaces the function name
    )

    you  */
/*  let SumNumber=(num1,num2)=>{
    return num1 * num2;
}
console.log(SumNumber(10,15)); */
/* callback functions
recursion 
iffy */



//question one
/* using a function declaration create a function called
getrate then add two parameters to the function ,then inside the function return the formular that calculates the rate ,add a default value which will display when no argument is provided,
output the value to the console by calluing the function 

\*/ 
//defualt values are set by an assignment operator at the parameter level

 let principalAmount=100;
 let timeInYears=4;
 let rate=0.05;
 
 
 let calculatedRate = getRate(principalAmount, timeInYears,rate);
 console.log("Calculated rate:", calculatedRate);

 function getRate(principal,time,rate){
    let finalRate=(principal*rate*time);
    return finalRate;
 }


 
 
