
function  toCelsius (fehrenheit) {
    return (5/9) *(fehrenheit-32);
}

// let value =  toCelsius()
// console.log(value)

// console.log(typeof toCelsius)


function sayMyName () {
    console.log("rohit sharmaji")
}
// sayMyName()

function addTwoNumber(num1 , num2){
    // console.log(num1 * num2)
    return num1+num2;
} 

// const result = addTwoNumber("4","5")
// console.log(result);

function userLogin(userName) {
    if(!userName){
        console.log("please enter a user name")
        return 
    }
    return `${userName} just logged in`
}
// console.log(userLogin())


function calulateCartPrice (...num1){
    return num1
}
// console.log(calulateCartPrice(23,23,232,42))

// how to pass object into funtion

const user ={
     userId :232,
     userName:"rohit sharma"
}
function handalObject(anyObject){
    // console.log(`UserName is ${anyObject.userName} and id is ${anyObject.userId}`)
}

// handalObject(user)// passing object as argument


// passing array into function 

const myArr  = [100,200,400] // ->Array

function  returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myArr)) // Array passing as an 




// ***************************************************************************************

// Function declaration 

function  multiplyNumbers(num1,num2) {
    return num1 *num2
}

// console.log(multiplyNumbers(23,45))

// ######### function expression  ######3

const fun = function (n1,n2){
    return n1+n2
}
// console.log(fun.toString())


// ###############  function constructor with keyword "Function #########

const myfunction =  new Function('n1' ,'n2' ,'return n1+n2');
// console.log(myfunction(32,2))

//   But we don't use it



// ########## self- invoked function #############
// => it is anonymous function    

(function() {
    // console.log("hello ,rohit this is self- invoked function")
})();



function sum(...args) {
    let sums = 0 ;
    for (let arg of args) sums +=arg
    return sums;
    // console.log(arguments.length)
}

// let x = sum(4,2,4,52,4)

// console.log(x)

let x = findMax(3,2,5347,756,2)

function  findMax(){
    let max = -Infinity;
    for (let i = 0 ; i<arguments.length ; i++){
        if(max < arguments[i]) max = arguments[i];

    }
    return max;
}

// console.log(x)
a








