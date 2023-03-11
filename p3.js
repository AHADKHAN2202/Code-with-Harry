// # Alternate Sum
// You are given two numbers, return the sum of all the alternate numbers between the two number. Both the numbers are inclusive.

// ### Input Format
// Two numbers `start` and `end`

// ### Output Format
// Return the sum of all the alternate numbers. 
// Example int the range 1 5
// `1 2 3 4 5`
// The sum will be 1 + 3 + 5 = 9

// ### Sample Input:
// ```
// 1 5
// ```

// ### Sample Output:
// ```
// 9
// ```

// Example2
// ### Sample Input:
// ```
// 10 20
// ```

// ### Sample Output:
// ```
// 90
// ```
// odd alternate number
function sumAlternateNumber(num1,num2){
  let sum = 0; // 6  
  for(let i = num1;i<=num2;i++){ 
   if(i%2!=0){
     sum+=i;
   }
  }
  return sum;
}
console.log(sumAlternateNumber(1,5));

//even alternate number
function sumAlternateNumber(num1,num2){
  let sum = 0; // 6  
  for(let i = num1;i<=num2;i++){ 
   if(i%2===0){
     sum+=i;
   }
  }
  return sum;
}
console.log(sumAlternateNumber(1,5));
