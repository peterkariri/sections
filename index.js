/* create a variable and asign it a name ,create another variable and assign it a differnet name
join the two names using string template,then  , */
let userName="Faith"
let userAge=25;
console.log("my Name is "+userName +" "+ "and i am " +userAge +"years old");//string concatenation

console.log(` My Name is ${userName} and i am ${userAge} years Old`);//string templating//template literals 

//question 2
//all the element sand datatypes are truthy except (null,false,0,undefined,'')>>falsy values
//use a if else condition to test for boolean truthy and falsey values

let positveNumber=100;
let nullNumber=20;
if(positveNumber>0 && nullNumber===0){
    console.log("this is true");
}
else{
    console.log("this is false");
}

//then use the ternary operator to test for thesame


//question three
/* create two number variables (variable 5 and 10) and perform the following
arithmetic operation
comparison operation

logical operation in coordination with a boolean operation such that
 when a number is greter than the other it outputs truth else false */

//Create  a variable called hour and save the current hour of the day