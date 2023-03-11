// # Fibonaaci Series
// Complete the function defination where you `n` is provided as input. You need to console.log the first `n` fibonacci numbers

// NO TESTCASES FOR THIS QUESTION
// let bag = "";
// function fibonacci(n){
//   let x =0; // 1
//   let y = 1;
//    bag+=x ;
//   bag+=y;
//   for(let i = 1;i<=n;i++){ // 1
//     let fib = x+y; // 0+1=1
//     if(fib===1){
//       bag+=fib;
//     }
//     x = y; // 1
//     y = fib; // 1
//     fib = x + y; // 1+1 =2
//     bag+=fib;
//   }
//   return bag
  
// }

// fibonacci(5);
// console.log(bag);

// let bag = "";

// function fibonacciSeries(n){
//   let x = 0 ;
//   let y = 1;
//   let fibo;
//   bag+=x+" ";
//   bag+=y+" ";
//   let i = 1;
//   while(i<=n){
//     fibo = x+y;
//     if(fibo===1){
//       bag+=fibo+" ";
//     }
//     x = y;
//     y = fibo;
//     fibo = x+y;
//     bag+=fibo+' ';
//     i++
//   }
//   return bag;
// }

// console.log(fibonacciSeries(10));

// let num = 10;
// let x = 0;
// let y = 1;
// let fn = x+y;

// console.log(x);
// while(fn<num){
//   console.log(fn);
//   fn = x+y;
//   x = y;
//   y = fn;
// }