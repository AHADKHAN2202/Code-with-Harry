// # Number of Boxes
// You are given a number `n` calculate the number of boxes present.
// ![image](image.png)![image](image_2.png)![image](image_4.png)![image](image_5.png)![image](image_6.png)![image](image_7.png)

//     Step 0: Start with 0
//     Step 1: Add 3
//     Step 2: Subtract 1
//     Repeat Step 1 & 2 ...

// ### Input Format
// A number `n`

// ### Output Format
// Return the number of boxes present after `n` steps

// ### Sample Input:
// ```
// 0
// ```
// ### Sample Output:
// ```
// 0
// ```

// Example2
// ### Sample Input:
// ```
// 1
// ```
// ### Sample Output:
// ```
// 3
// ```


function boxes(n){

  let box = 0;
for(let i=1;i<=n;i++){
  if(n===0){
    return 0;
  }else if(n!=0 && i%2!=0){
    box = box+3;
  }else if(n!=0 && i%2===0){
      box = box-1;
  }
}
  return box;
}

console.log(boxes(3));