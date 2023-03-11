// # Factor
// You are given a number returns the factors of the number as space seperated string.

// ### Input Format
// A number `num`

// ### Output Format
// Return the factors of num as a space seperated string.

// ### Sample Input:
// ```
// 9
// ```

// ### Sample Output:
// ```
// "1 3 9"
// ```

// Example2
// ### Sample Input:
// ```
// 0
// ```

// ### Sample Output:
// ```
// ""
// ```
let jhola = "";
const factor = (num)=>{
  for(let i=1;i<=num;i++){ // 9
    if(num%i===0){ // 9/9=t
      jhola+=i+" ";// "1 3 9 "
    }
  }
  return jhola;
}
factor(9);
console.log(jhola)