function mergeArray(array1, array2) {
  let arrayThree = array1.concat(array2); //a joint array
  //local scope array variables
 /*  arrayThree.sort( (a,b)=> a.toLowerCase().localeCompare(b.toLowerCase()) ); //sort them in ascending order */
     arrayThree.sort((a,b)=> a-b)
  return arrayThree;
}

/* let myNames=["peter","jones","faith","winnie"]//global scope

let myNames2=["Griffin","Naijo","Mutanu","Atieno"]

let answersArray=mergeArray(myNames,myNames2);
console.log(answersArray); */

let myNumbers = [1, 22, 232, 54, 6, 5, 76, 88, 23]; //global scope

let myNumbers2 = [234, 34, 5, 6, 76, 4, 5, 45, 4, 65, 7, 767, 6, 86];

let answersArray = mergeArray(myNumbers, myNumbers2);
console.log(answersArray);

//////removing duplicates from an array 
function removeDuplicates(nums){
    let filterdArray=[ ...new Set(nums)]
    //...new
    //set(//parameters to be set )in built js   object it stores all yth values (primitive or non primitive data type)
    return filterdArray;
}
let response=[1,1,1,1,23,3,3,3,3,4,5,6,7,8,9,6,8,6,8]
console.log(removeDuplicates(response));


set 1{1,2,2,3,4,5,6,7,7,8,9,9,10}//universal set 
//subset >cleaned version of the set 
set 2{1,2,3,4,5,6,7,8,9,10}
intersection(common)
union>combine both(+)

