// let goodpeople=document.getElementById("practice");
// let dont=document.getElementById("don't");

// function practice(){
//     goodpeople.innerHTML+="<u>U will become a pro in front-end</u>"
//     goodpeople.style.color="green"
// }

// function forget(){
//     dont.innerText+="U will forget the topics"
//     dont.style.color="red"
// }



// let img=document.querySelector("img");

// img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShq4gxDFirZFOGvs1_s_kbwBfWHVW6SWHNLA&usqp=CAU"


// img.setAttribute("id","leo");
// console.log(img);

// Create Html element

let div= document.createElement("div");
div.setAttribute("id","card")
console.log(div);

let h1=document.createElement("h1");
let h2=document.createElement("h1");
h1.innerText="Hello";
h2.innerText="Everyone";

div.append(h1,h2)

// div.removeChild(h1)

let newE=document.createElement("u")
newE.innerText="I am Proud My Students";

div.replaceChild(newE,h2)

document.body.appendChild(div);

