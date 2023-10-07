//&     Direct Access

// console.log(document.body);
// console.log(document.head);
// console.log(document.links);  // html collections=array like object
// document.links[0].innerText="Click";
// console.log(document.links[0]);
// console.log(document.forms);
// console.log(document.images);
// document.body.style.background="orange";
// console.log(document.body.style);

//& DOM methods

//^ by ID

// let paragraph=document.getElementById("para");
// paragraph.style.color="red";

//^ by classname

let headings=document.getElementsByClassName("head");
console.log(headings);

//To convert html collection into array ---- Array.from()
let arr=Array.from(headings);
console.log(arr);

function emojis(){
    for(let i=0;i<arr.length;i++){
    arr[i].innerText="😊💕"
    }
}

let heading=document.getElementsByClassName("h");
console.log(heading);

let arr1=Array.from(heading);
console.log(arr1);

for(let i=0;i<arr1.length;i++){
    arr1[i].innerText="💕"
    }