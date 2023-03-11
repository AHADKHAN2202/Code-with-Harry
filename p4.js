// # Repeat
// You are given a string and a number, return a string in which the given string is repeated n number of times.

// ### Input Format
// A string `str` and a number `num`

// ### Output Format
// Return a string where the given given string is repeated num number of times

// ### Sample Input:
// ```
// "a" 5
// ```
// ### Sample Output:
// ```
// "aaaaa"
// ```

// Example2
// ### Sample Input:
// ```
// ab 3
// ```
// ### Sample Output:
// ```
// ababab
// ```


function repeatedString(num,string){
  let bag = "";
  for(let i=1;i<=num;i++){
    bag+=string;
  }
  return bag;
}
// repeatedString(3,'a')
// console.log(bag);
// console.log(repeatedString(3,'ab'));