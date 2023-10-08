
//& DOM methods

//^ by ID

let paragraph=document.getElementById("para");
paragraph.style.color="red";

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

//^ by Tagname

let tour=document.getElementsByTagName("h3");
console.log(tour);

let tourarr=Array.from(tour);
console.log(tourarr);


//^ query selector
let parent=document.querySelector("#tour");
console.log(parent);
parent.style.width="100%"
parent.style.border="2px solid"
parent.style.display="flex"
parent.style.justifyContent="space-evenly"
parent.style.background="lightblue"

tourarr.forEach(element=>{
    element.style.border="2px solid red "
    element.style.textTransform="uppercase"
    element.style.height="100px"
    element.style.display="flex"
    element.style.justifyContent="center"
    element.style.alignItems="center"
    element.style.width='200px'
    element.style.background="crimson"
    element.style.borderRadius="10px"
})

^ querySelectorAll

let web=document.querySelectorAll("h1,#slap,myStd,h2")
console.log(web);

web.forEach(element =>{
    element.style.color="green"
})

