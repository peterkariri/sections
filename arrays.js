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
\\create an array of 10 vehicles ,then use this array methods to add ,remove,check lenght of the array
length
pop
push
unshift
splice
