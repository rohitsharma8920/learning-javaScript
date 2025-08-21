// class user{
//     constructor(email,password){
//         this.email = email;
//         this.password = password;
//     }
//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//          this._email= value
//             }
//     get password(){
//         return this._password.toUpperCase()
//     }
//     set password(value){
//         this._password = value.toUpperCase()
//     }
// }
// const rohit = new user("rohit123@gmail.com" , 'abc')

// console.log(rohit.password);
// console.log(rohit.email);


// define properties --function base syntex.

function user (email,password){
    this.email = email;
    this.password = password

    Object.defineProperty(this,'email',{
        get: function(){
            // console.log('getted email');
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this,'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

    const rohit = new user('ksdjfis@gla.in' ,'oij')

    console.log(rohit.password);
    console.log(rohit.email);
}