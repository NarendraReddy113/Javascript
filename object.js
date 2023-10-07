

//declaration
//! object literal
// let mobile={
//     brand:"iphone",
//     cost:"80k",
//     camera:"48mp",
//     ram:"6GB",
//     color:"white"
// }
// console.log(mobile);

// //Accessing obj prop
// //! 1.Dot operator
// // console.log(mobile.brand);
// // console.log(mobile.ram);

// //updation
// mobile.color="black";
// // console.log(mobile);

// //adding
// mobile.processor="a17 bionic";
// // console.log(mobile);

// //deleting
// delete mobile.brand;
// console.log(mobile);

// //! 2.Bracket notation
// // console.log(mobile["color"]);


// let emp={
//     eid:"S123",
//     ename:"Soul",
//     sal:10000,
//     skills:["java","sql","html","css","js"],
//     address:function(){
//         let street="mountain road";
//         let city="hyd";
//         console.log(street,city);
//     }    //object method
// }
// console.log(emp.sal);
// emp.address();
// console.log(emp.skills[2]);

//! Object constructor
// let laptop=new Object();
// laptop.brand="dell";
// laptop["price"]=25000;
// laptop.color="blue";
// console.log(laptop);

//! constructor function
// function student(name,sid,address){
//     this.name=name;
//     this.sid=sid;
//     this.address=address;
// }

// let std1=new student("soul","2321","bng");
// console.log(std1);

//! Object methods
let mobile={
    brand:"iphone",
    cost:"80k",
    camera:"48mp",
    ram:"6GB",
    color:"white"
}
console.log(mobile);

// //& keys
// console.log(Object.keys(mobile));
// //&values
// console.log(Object.values(mobile));
// //& entries
// console.log(Object.entries(mobile));
// //& hasownPropertry
// console.log(mobile.hasOwnProperty("cost"));
// //& seal()
// Object.seal(mobile);
// console.log(mobile.brand); //accesing
// mobile.brand="redmi";
// console.log(mobile.brand);  //updation
// mobile.battery="5000mah"
// console.log(mobile);  // not able to add prop
// delete mobile.cost;
// console.log(mobile);  // not able to del prop after sealed

// //&isSealed
// console.log(Object.isSealed(mobile));

//& freeze()
// Object.freeze(mobile);
// console.log(mobile.color);  //freeze
// mobile.color="grey";       //cannot access
// console.log(mobile.color);   
// mobile.battery="5000mah";    //cannot add
// console.log(mobile);
// delete mobile.camera;
// console.log(mobile);     //connot delete

// //& isfreezed
// console.log(Object.isFrozen(mobile));

//& assign()
// let mobile1={
//     battery:"5000mah",
//     rom:"5gb",
//     ssize:"6.5"
// }

// Object.assign(mobile,mobile1);
// console.log(mobile);

// let resObj=Object.assign({},mobile,mobile1);
// console.log(resObj);
// console.log(mobile);
// console.log(mobile1);

