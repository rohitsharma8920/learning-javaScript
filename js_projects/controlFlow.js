//  ## for of

const arr = [1,2,3,4,5]

let str = "sharmjakia 23"

for(const num of str){
    // console.log(num)
}


//  ##Maps

// const map = new Map();
// map.set('a' ,1);
// map.set('b',13)
// map.set(23,'c')
// map.set(1 ,'a')
// map.set(1 ,'a')

// console.log(map)

// for(const [key,value ]of map){
    // console.log(key)
// }

//  for-of loop on object is not work

const myObject = {
    js : "javaScript",
    cpp : "c++",
    rect :'rect js',
    oop : 'object oriented programm',
}

// for(const key of myObject){
//     console.log(key);
// }


// ## for-in loop 
for(const key in myObject){
    // console.log(`keys are - ${key} and values are - ${myObject[key]}`);
}


// # for-in loop in arrays

const array = ['one' , 'two' , 'three', 'four'];
for(let key in array){
    // console.log(array[key])
}



const map = new Map();
map.set('a' ,1);
map.set('b',13)
map.set(23,'c')
map.set(1 ,'a')
map.set(1 ,'a')

for(let key in map){
    // console.log(key)
}

//  #for in loop not working in for-in loop 


// # for-each loop

const coding = ['js','java ', 'cpp','rect' , 'python']

// using for-each loop many diff. ways 

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(val){
//     console.log(val)
// }
// coding.forEach(printMe)


// # for -each loop contain three parameters (value ,index ,array)


// coding.forEach((item ,idx , arr) => {
//         console.log(item ,idx,arr);
// })



const myCoding = [
    {
        languageName : 'javaScript',
        languageExtension :'js'
    },
    {
        languageName : 'java',
        languageExtension :'java'
    },
    {
        languageName : 'python',
        languageExtension :'py'
    }
]

myCoding.forEach((obj) => {
    // console.log(obj);
})



//  # filter 

// const num = [1,2,3,4,5,56]

// const newNum = num.filter((num) => num >  4)
// console.log(newNum)



const num = [1,2,3,4,5,56]


// #  Map iterate every element of array 

// const newNumber = num.map((val) => val+10)
// console.log(newNumber);

//# chain map 

const newValue = num
                    .map((val) => val*10)
                    .map((nval) => nval +2)
                    .filter((val) => val >30)

// console.log(newValue)



// ## reduce 

const myNum = [1,2,3]

const myTotal = myNum.reduce( (acc , curr) => {
    // console.log(acc);
    return acc + curr;
},0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName : 'js course',
        price :134
    },
    {
        itemName : 'mobile',
        price :42333
    },
    {
        itemName : 'headphone',
        price : 1110
    }
]

const  totalPrice =shoppingCart.reduce( (acc ,items ) => acc +items.price ,0)
console.log(totalPrice)