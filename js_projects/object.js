
//   (1). object literal

const mySym = Symbol("mykey") // symbole decleration


const student = {
   name :"rohit sharma" ,
   age : 19 , 
   rollNO :22 ,
   [mySym] :"key1",
   sex :'male'
}
student.name = "mohit"
Object.freeze(student) // freeze object for  making object unchange
student.name ='sumit'
// console.log(student[mySym])
// console.log(student)


// Using a new keyword

const car = new Object({carColor : 'white',carName :'hondai' ,carNumber :1242})

//Accessing object property

// (1). 
// console.log(car.carName)
// //(2).
// console.log(car['carColor'])

 //(3). Accessing using loop

 let text = ""
 for(let x in car) {
    text +=car[x] +' '
 }
//  console.log(text)

//  (4) create an array

const newArray = Object.values(car)
// console.log(newArray)




//  ***********     Object singalton  ***************

const singalton = new Object() 
singalton.id ="122as"
singalton.name =" john"
singalton.country = "USA"

// console.log(singalton)


// marge to object

const obj1 = {1:"one" , 2:"two"}
const obj2 ={3:"three" ,4:"four"}

// const obj3 = {obj1 ,obj2}
// const obj3 =Object.assign({}, obj1,obj2)

const obj3 = {...obj1 , ...obj2}

// console.log(obj1)
// console.log(obj3)


// console.log(Object.keys(car))
// console.log(Object.values(car))
// console.log(Object.entries(car))





// #################################3333

const course = {
   courseName : "js in hindi",
   price :"999",
   courseIn : " rohit"
}
 // value / object destructure 

 const {courseName : cn} = course
 console.log(cn)

 // API ,/GSON >> object without the varible or name

 