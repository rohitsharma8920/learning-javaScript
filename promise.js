//creating promises 

// const promiseOne = new Promise(function(resolve ,reject){
//     setTimeout(function(){
//         console.log("Asynic task is completed");
//         resolve() // primise call
//     },2000)
    
// })

// => promise consume.

// promiseOne.then(function(){
//     console.log('promise consumed')
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2')
//         resolve()
//     },2000)
// }).then(function(){
//     console.log('Async 2 completed');
// })



// resolve send data / or parameter to the consume promise(then).

const promiseThree = new  Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:'rohit Sharma' ,email :"rohit@gmial.com"});
    },2000)
})

promiseThree.then(function(user){
    console.log(user);
})


// =>
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({userName:'rohit' ,password :'123'})
        }
        else {
            reject('error ,something went wrong')
        }
    },2000)
})

promiseFour.then((user) =>{
    console.log(user);
    return user.userName;
}).then((userName) =>{
    console.log(userName)
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("your task is completed"))



// 
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName:'java Script' ,password :'123'})
        }
        else {
            reject('error ,js  went wrong')
        }
    },2000)
})

async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);

    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log('error in js')
    }
}

consumePromiseFive()



// async function getAllusers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/10")

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: " ,error)
//     }
// }

// getAllusers()

fetch("https://jsonplaceholder.typicode.com/users/10").then((response) => {
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>console.log(error))
