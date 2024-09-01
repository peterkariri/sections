//..algorithm to be followed
/* function name 
function parameters 
check if the number is  k within the array \
and if not retrun the default array 

original array=1,2,3,4,5,k=0
k=1(5,1,2,3,4)
k=2(5,4,1,2,3)
k=3(5,4,3,1,2)
k=4(5,4,3,2,1)
k=5(1,5,4,3,2)
k=6[1,2,5,4,3]

//slicing the element at the beginnign of the array
slicing element at the end of the array with the length prop//specify to go to the index 0

join them together(concat)
*/

function rotateArray(arr, k) {
  k = k % arr.length;
  if (k === 0) {
    return arr;
  }

  //rotating the array by slicing the last elemnt and also slicing the first element

  let firstSlicedElement = arr.slice(-k);
  let slicedArrayTwo = arr.slice(0,arr.length - k);//hanldes the removal of the redundant elements as well as the target index o of the sliced arrays 
  return firstSlicedElement.concat(slicedArrayTwo);
}
let arrayNew = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(rotateArray(arrayNew, 2));



//finding missing number 
function findMissingNumber(nums){
    //calculate length of inut array nums
    let n=nums.length+1;//inclussive n
    //calculate the expected sum of nmbers from 1 to n 
    let expectedSum=(n*(n+1))/2;
 
    //calculate actual sum of the numbers in the array
    let actualSum=0;
     for(let i=0;i<nums.length;i++){
        actualSum+=nums[i]
     }
     return expectedSum-actualSum
 
 
 }
 let nums = [1, 2, 3, 5,6,7];
 console.log(findMissingNumber(nums));
 