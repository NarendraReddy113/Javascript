// let obj={
//     fName:"Narendra",
//     lName:"Y",
//     sal:25000,
//     address:"bng"
// }
// console.log(obj);

// let jobj=JSON.stringify(obj)
// console.log(jobj);

// // JSON format to normal object format
// let newObj=JSON.parse(jobj)
// // console.log(newObj);

// setTimeout(function(){
//     console.log("Hello");
// },2000)


// setInterval(function(){
//     console.log("Hey students you have any doubts please ask now itself");
// },4000)

let slide=document.querySelector("img");

setTimeout(()=>{
    slide.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkFl4-e90gihmLEM7TZZ-LTbwkWQ47VaLMQ&usqp=CAU"
},2000)

setTimeout(()=>{
    slide.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVyiemrct9SOhDmwyZFu5c2Ho92YOU2_pHQ&usqp=CAU"
},3000)

setTimeout(()=>{
    slide.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQGF6tl2vrrq1Xy2aTgyZjHNKjcQvFnUq-Q&usqp=CAU"
},5000)

setInterval(()=>{
    slide.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueMRfiPndk0jv3ZesESFVwCEm-IdhjqjjRg&usqp=CAU"
},2000)

setInterval(()=>{
    slide.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbQdMmDJHo54KSDB0AUYuPk7hoRbGhen3CA&usqp=CAU"
},3000)
