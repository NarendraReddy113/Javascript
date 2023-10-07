// ! functions

// let a=10;
// console.log(a);
// function add(num1,num2) {
//     console.log(`Addition of ${num1} and ${num2} is ${num1+num2}`);
// }
// add(10,20);

// & types of functions
//^ 1 Named function
// function add(num1,num2) {
//     console.log(`Addition of ${num1} and ${num2} is ${num1+num2}`);
// }
// add(10,20);

//^ 2. Anonymous function
// function() {
//     console.log("Hello World...!");
// }

//^ 3.Function with Expression
 // first class function/first citizen func.
// let res=function() {
//         console.log("Hello World...!");  
//     }
//     res();

// let res=function add(num1,num2) {
//         console.log(`Addition of ${num1} and ${num2} is ${num1+num2}`);
//     }
//     res(10,20);

//^ Arrow function
// let task=()=>console.log("Hello");
// task();

// let task=(a,b)=>{
//     console.log(a);
//     console.log(b);
//     console.log(a*b);  //implicit return
// }
// task(100,200)

// let task=(a)=>{
//     return a*a;    //explicit return
// }
// console.log(task(100));

// ^ IIF - immediate invoke finction
// (function() {
//     alert("This is IIF");
// })();

//^ Nested Function
// function parent(){
//     let house=3;
//     let land="4acres";
//     function child() {
//         let chouse=1;
//         console.log(chouse);
//         console.log(house);
//         console.log(land);
//     }
//     child();
// }
// parent(); 
// let a=10;
// console.log(a);
// function parent(){
//     let house=3;
//     let land="4acres";
//     function child() {
//         let chouse=1;
//         console.log(chouse);
//         console.log(house);   // lexical scoping/scope chaining
//         // console.log(land);
//     }
//     return child;
// }
// parent()();    // js currying

//^ Higher order Function
// let a=10;
// console.log(a);
// function HOF(num1,num2,task) {
//     let res=task(num1,num2);
//     return res;
// }

// let add=HOF(2,5,function(a,b){
//     return a+b;
// })

// let mul=HOF(2,5,function(a,b){
//     return a*b;
// })

// console.log(add);
// console.log(mul);

//^ Callback Function
// function first() {
//     console.log("first");
// }                                                  // named,arrow,hof imp*****

// function second() {
//     console.log("third");
// }

// function third(callback) {
//     console.log("second");
//     callback()
// }

// first();
// third(second);

//^ Generator Function
function* gen(){
    console.log("Generator Function");
    yield 1;
    yield 2;
    yield 3;
}

let res=gen();
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);

