let myPromise=new Promise((resolve,reject)=>{
    let js="completed"
    if(js=="completed"){
        resolve(`U can attend react classes`)
    }else{
        reject(`u couldn't able to understand react so first complete js`)
    }
});

myPromise.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log(`Thank for joining our class`);
})


console.log(myPromise);