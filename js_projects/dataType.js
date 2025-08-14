// Data Type =>
// there are 8 type of data type


let age = 21
age = null

let stringAge = String(age)
// console.log(stringAge)
// console.log (typeof age)
// console.log(typeof stringAge)

//conversion from one dataType to another dataType

let score  = "33"
// console.log(typeof score)

let consvScore = Number(score)
// console.log(typeof(consvScore))
// operations


// console.log(null > 0)
// console.log(null < 0)
// console.log(null == 0)
// console.log(null >= 0)
// console.log(null <= 0)


// console.log("rohit" == "rohit")


// ****************Stack And Heap*************


// Stack -> primitive(copy of Varible) ,  :  Heap -> non-primitive/reference (original value taken for change.)

let myName = "Rohit Sharma"

let anotherName = myName
anotherName = "sharmaji"
// console.log(anotherName)
// console.log(myName)


//

let userOne = {
    name : 'rohit',
    age :   20
}

let userTwo = userOne
userOne.name = "Rohit Sharma"

// console.log(userOne)
// console.log(userTwo)



//********************8String****************8
// String matupolatation -> ex - 'hello my name is ${name} my age is ${age}'

const gameName = new String('Rohit Sharma')
console.log(gameName)
//using all protocole for String .

console.log(gameName.length)
console.log(gameName.toLocaleLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,5)
console.log(newString)

const anotherString = gameName.slice(0,3)
console.log(anotherString)

let tradingPlatform = "stocks    conding"

console.log(tradingPlatform.trim())

console.log(tradingPlatform.replace('stocks' , 'angel'))


console.log(tradingPlatform.includes('st'))

console.log(tradingPlatform.split(" "))