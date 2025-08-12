// export is two type >> 1.Named Export 2. default Export

//(1).Named export.
//  export const name = "Rohit Sharmaji";
//  export let age  = 20;


const name = "Rohit Sharmaji";
 let age  = 20;
export {name,age}

//  (2). default export

const student = () => {
    let studentName = "krishnKant Singh";
    let section = "3G";
    return `my friend name is ${studentName} and his section is ${section}`
}

export default student;