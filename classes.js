class car {
    constructor(name , year){
        this.name = name;
        this.year = year;
    }   
        age(yr) {
           
            return yr - this.year;
        }
    
}

const myCar1 = new car("ford" ,2019);
const date = new Date();
console.log(myCar1.age(date.getFullYear()));
