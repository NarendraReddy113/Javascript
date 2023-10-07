// foreach(),fotin(),forof()

//! for each()
let arr=[10,20,30,40,50];
arr.forEach((value,index)=>{
    console.log(`the value present is ${index}th index is ${value}`);
})

//! forin()
let car={
    brand:"kia",
    color:"blue",
    cost:"1lakh"
}
for(let key in car){
    console.log(car[key]);
    // console.log(key);
}

//! forof()
let res=0;
for(let element of arr){
    res+=element
}
console.log(res);
