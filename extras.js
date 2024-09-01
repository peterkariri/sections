//capitaliing every word (first letter word)
function capitaliseWord(sentence) {
  let newSentence = sentence.split("");
  for (let q = 0; q < newSentence.length; q++) {
    if (q === 0 || newSentence[q - 1] === " ") {
      newSentence[q] = newSentence[q].toUpperCase();
    }
  }
  return newSentence.join(" ");
}

let sentenceFirst = "this is our humbled services";
console.log(capitaliseWord(sentenceFirst));

function rotateArray(arr, k) {
  //check if k is within limit
  k = k % arr.length;
  if (k === 0) {
    return arr;
  }
  //rotate array by k positions
  let rotatedArray = arr.slice(-k);
  let otherRotateArray = arr.slice(0, arr.length - 1);

  return rotatedArray.concat(otherRotateArray);
}
let arrayNew = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(rotateArray(arrayNew, 3));
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


