// Arrays

const arr = [1,2,3,4,5]
// console.log(typeof arr)

const arr1 = ["rohit" , "mohit", "sumit"]

const myArr = new Array(9,8,7,6,5)

// console.log(myArr)

myArr.push(4)
myArr.push(3)

myArr.pop()
// console.log(myArr)

myArr.unshift(12)   //adding giving element in the frant 
// console.log(myArr)

myArr.shift() // remove ele from the staring in array
// console.log(myArr)

 
// console.log(myArr.includes(5))   // check the element present or not in the array (result in boolean dataType)



// console.log(myArr.indexOf(5))  // give the index of giving element


const newArr = myArr.join()   //convert the array into string type with comma seperated

// console.log(newArr)
// console.log(typeof newArr)

console.log(arr.slice(3,5))  // give the element form given indexes to other and last elenment not includes , but not manupulate the arr 
console.log(arr)
console.log(arr.splice(3,5)) // same as  slice but manupulate array and include last element
console.log(arr)

