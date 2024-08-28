//arrays are a collection of logically related data
//hosptail,names of cars/types,names of people,fruits,vegetables
//there are three types of arrays:single arrays,two dimension array ,multidimensional arrays
//single array:array of single elements
//two dimensional arrays are matrix in shape (such that they are representesd in rows and colums)
//multidimensional arrays :are arrays that contain arrrays inside the
//(an array of vehicles with sub arrays of type of vehicle,color of vehicle,model of vehicle)

/* structure of an Array\
1.array name
let names =["faith","Mutanu","peter","developer","vehicle",putting]

2.assignment operator 
3.square brackets[] or brackets () 
the unique way of assinging an array to a variable but you jhave to call it as afunction (specify that this is an array with the array keyword)
let number= array(1,2,3,4,5,6)

4.indexing in arrays 
5.length of an array
array methods 
*/
let names = ["faith", "Mutanu", "peter", "developer", "vehicle", "putting"];

/* let number = array(1, 2, 3, 4, 5, 6); */
//array methodsaccessing elements in an array
//indexing of an array starts from zero(counting)
//1.array.length>>tells us the lenght of an array
console.log(names.length);
//accessing elements in an array
//we access elements in an array using the bracket notation

console.log(names[4]); //accessing elements with their index
console.log(names[0]); //accessing elements with their index
console.log(names); //accessing all elements in an array

//adding an elements/item to an array
//we use the  array methos push to add an itme to an array >adds an element at the end of the array
names.push("alice", "kipkeino");
console.log(names);
/* ..adding elements at the first /beginning of an Array
we use the unshift method */
names.unshift("Jumping");
console.log(names);
//adding an element at a specified index>>we use the splice method
//name of Array(indexes ,what yyou want to be added)
names.splice(2, 4, "school ", "homework");
//can also be used to remove items
names.splice(0, 2, "school ", "homework");

console.log(names);
//removing elements from an array
//we use the pop method to remove elements >>at the end of the array
/* names.pop();
console.log(names); */

//MDN reference

//slice,map,indexof,concat,lastIndex,includes,fill,copywithin

//slice
//creates a new array contaning a portion of the original array(creates a subchild of some sort )
//takes two arguments the startofthe slice and the end of the slice index
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 12, 13, 14, 15, 26, 27, 28, 354, 456, 76, 345,
  343, 6567, 343, 22, 34, 3435, 2546, 2435, 7656, 343,
];
let newArray = numbers.slice(10, 30);
console.log(numbers);
console.log(newArray);

//map 
//creates a new array by applying a functiob to each element of the parent/original array
//takes a callback function as an argument
const numbers1=[1,2,4,5,6,8,86,54,654]

let newMapArray=numbers1.map(function(num){
    return num*num;
})
console.log(newMapArray);
//concat(+)
//the concat method is used to join more arrays together
const namesNew=["faith","winnie","Peter","Stefan"]
const NamesTwo=["Mutanu","Atieno","Spectre","Sijui"]
const NamesThree=namesNew.concat(NamesTwo);
console.log(NamesThree);
//How to map the first element to the first other element of the array 
//Includes 
//checks if a value is included in the array set no matter the lenght of the array
//it outs outputs a boolen value either tru or false if an element is included or not 

const namesThr=["faith","winnie","Peter","Stefan"]
const isIncluded=namesThr.includes("pooh")
console.log(isIncluded);
//reduce>>used in sum,products,minus,......
//the reduce ,method allows you accumulate a songle value by iterating the array 
/* 
Array.reduce(callback(accumulator,currentValue,currentIndex,array),initialValue)
accumulator:initially the initial value which is later accumulated over a period of time 
currentValue:current element being procesed 
currentIndex:index of the current element in an array
initialValue:the original values in a n array.original array
return value will be accumulator
 */
let calcNumbers=[1,2,3,4,5,6,7,8,20,390]
const sum=calcNumbers.reduce(function(accumulator,currentValue){
    return accumulator - currentValue;
})
console.log(sum);


