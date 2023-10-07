//! Arrays

// Declaration
// & Array Literal Method
// let array=[10,20,30,40,50,60,70,80];
// // console.log(array);

// console.log(array[4]); //accessing
// array[8]=100;          //adding

// array[2]=300;         //updating
// console.log(array);

// delete array[2];       //deleting
// console.log(array);

// & Array Constructor
// let emp=new Array();
// console.log(emp);
// emp[0]=123;
// emp[1]="soul";
// emp[2]=40000;
// emp[3]="Goa";
// console.log(emp);
// // console.log(emp.length);

// for (let i = 0; i < emp.length; i++) {
//     console.log(emp[i]);
// }

//! Array Methods

// let flipkart=["clothes","mobiles","footwear","grocery","cosmetics"];
// console.log(flipkart);

// //push() at end
// flipkart.push("Earphones","laptop");
// console.log(flipkart);

// //unshift() at start
// flipkart.unshift("Shirts");
// console.log(flipkart);

// //pop()  at end
// flipkart.pop();
// console.log(flipkart);

// //shift() at start
// flipkart.shift();
// console.log(flipkart);

// //includes() boolean values
// console.log(flipkart.includes("footwear"));

// //indexof() index of items
// console.log(flipkart.indexOf("grocery"));

// //at()
// console.log(flipkart.at(3));

// //slice()
// let newArr=flipkart.slice(1);
// console.log(newArr);
// console.log(flipkart);


//splice()
// flipkart.splice(2,0,"Redmi");
// console.log("after splicing");
// console.log(flipkart);

// //concat()
// let amazon=["tv","watches","bottles","facewash","airpods"];
// console.log(flipkart.concat(amazon));

//join()
// console.log(flipkart.join());
// console.log(flipkart.join(""));

//reverse()
// console.log(flipkart.reverse());

//toString()
// let str="Hello";
// console.log(str.toString());
// console.log(flipkart.toString());

//split()
// let str="Hello";

// let arr=[10,20,30,40,[100,200,300,400,[1000,2000,3000],900],[11,55,45]];

// console.log(arr[4][2]);   //300
// console.log(arr[4][5]);   //900
// console.log(arr[5][1]);
// console.log(arr[4][4][1]);

//  student=[123,"Narendra","narineraj909@gmail.com","7680922982","Goa"];
// var password =student[2].slice(0,4)+student[3].slice(6);
// document.write(password);
// // console.log(password);

//! filter(),map(),reduce()

let cost=[1000,3300,5700,2500,4570];

// let farray=cost.filter((element)=>{
//     if(element>3000){
//         return element;
//     }
// })
// console.log(farray);

// let marray=cost.map((val,index)=>{
//     let dis=val*5/100;
//     return val+dis;
// })
// console.log(marray);

// console.log(cost.map((val,index)=>{
//     return [val,index];
// }));

// let rarray=cost.reduce((acc,curVal)=>{
//     return acc+curVal;
// })
// console.log(rarray);

//! call(),apply(),bind()
var name="ram";

// function emp(){
//     let name="tom";
//     console.log(this.name);
// }
// emp();

// let emp=()=>{
//     let name="tom";
//     console.log(this.name);
// }
// emp();

// var firstname="john";
// var lastname="Doe";

// let obj={
//     firstname:"Soul",
//     lastname:"narine",
//     eid:123,
//     sal:24000,
//     address:{
//         city:"bng",
//         pin:560021
//     },
//     fullname:function(){
//         console.log(`${this.firstname} ${this.lastname}`);
//     }
// }
// obj.fullname();

let emp1={
    fname:"sonu",
    lname:"nigma",
    sal:25000
}
let emp2={
    fname:"Darshan ",
    lname:"raval",
    sal:35000
}
let emp3={
    fname:"MS",
    lname:"Dhoni",
    sal:45000
}
let emp4={
    fname:"virat",
    lname:"kohli",
    sal:55000
}

function demo(hike,address){
    console.log(`Dear Employee ${this.fname} ${this.lname} your are getting salary with hike of ${hike} and your in hand salary is ${this.sal+hike}`);
    console.log(`You are relocated to ${address}`);
}

//! call()
// demo.call(emp1,200,"bng");
// demo.call(emp2,2100,"bng");
// demo.call(emp3,1200,"goa");
// demo.call(emp4,2050,"ts");


//! apply()
// demo.apply(emp1,[500,"gooty"]);


//! bind()
// let res=demo.bind(emp3,10000,"chennai");
// res();

