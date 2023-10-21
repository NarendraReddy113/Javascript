//! Array Destructuring
// let arr=[10,30,40,20.50];

// let [a,b,c,d,e]=arr;
// console.log(b);

// let arr=[10,20,30,[1,2,3,4]];
// let [x,y,z,w]=arr;
// console.log(w);

// let [a,b,c,d]=w;
// console.log(b,d);

//! Object destructuring

// let obj={
//     fname:"Soul",
//     lname:"Narine",
//     sal:23000,
//     address:{
//         city:"Nellore",
//         street:"P Kandrika"
//     },
//     skills:["html","react","js","css","java"]
// }

// let {fname,lname,address:{city,street},skills}=obj;
// console.log(lname,fname,city,skills);

// let [a,b,c,d,e]=skills;
// console.log(b);

//! rest and spread

//^ rest
let arr=[100,200,300,400,500,800,600];
let [...c]=arr;

// console.log(c);


let emp={
    ename:"soul",
    eid:"113",
    sal:30000
}

let {...e}=emp;
// console.log(e);

//^ spread

console.log(...arr);

let newArr=[...arr];
console.log(newArr);

let newEmp={...emp}
console.log(newEmp);