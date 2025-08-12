let str = "kk playing online games in his laptop kk";

// console.log(str)

//  ########### length method #########33

// console.log(str.length)

// #############  CharAt ##########
// console.log(str.charAt(3))


// ######  charCodeAt ###########
let char = str.charCodeAt(0)
// console.log(char)


// #############  charpointAt() ##########

let charpAt = str.codePointAt(0);
// console.log(charpAt)


// ############ At #########  
let At = str.at(-2)
// console.log(At)

// console.log(str[874])

// ###### const ###########

const s1   ="Rohit"
const s2 = "sharmaji"
// console.log(s1.concat(' ' ,s2))

// ############# slice() #########

// console.log(s1.slice(2,5))

// ################ subString() ############333
// slice and substring are same but diff is that in substring less than 0 start with 0;


// console.log(str.substring(3))


// ########### subStr() ############
//  substr is same as slice but in substr 2nd parameter is the size of substring.
// console.log(s1.substr(2,3))

// #############3 repeat $############

// console.log(s1.repeat(3))


// ############# replace ##########

// console.log(str.replace('kk','rohit'))

//  replace alll matchs  use /g or replaceAll
// console.log(str.replace(/k/g,"r"))

// ############## split () #########33

// console.log(str.split(""))



// ###########3  indexOf()  ###########
// => it return the index(position) of first occurrence of string ,else return -1;

// console.log(str.indexOf('online game'))
console.log(str.lastIndexOf('i ,28'))  // give index from last occurence of string

// ##############   search() ##########

// console.log(str.search(/rohit/))

// #############3   match ()  ##############
// => it return an array with given string ,its index ,full string ,group

// console.log(str.matchAll('kk'))




// ###############  incudes( )   #########
// =>  if giving string is found in the parent string return true


// console.log(str.includes('kk'))



// ################  startWith &  endWith  #################


// console.log(str.startsWith('playing'))
// console.log(str.endsWith('kk'))

