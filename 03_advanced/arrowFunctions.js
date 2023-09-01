const user={
    username: "rahmat",
    price: 999,
    welcomePage : function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
// user.welcomePage()
// console.log(this);

// this keyword current context ko refer karta hai, jitna curly braces ke andar hote hain wo current context hota hai


//                  IMPORTANT
// this keyword gives many types of values in function ,whwn called in a fnction  but it does not give so much in objects


function chai(){
    console.log(this);
}
// chai()

function chaiTwo(){
    let username= "rahmat"
    console.log(this.username);
}
// chaiTwo()


// ++++++++++++++++++++++++++Arrow Functions+++++++++++++++

const chaiJi = function (){
    let myName="AMAR AKBAR ANTHONY"
    console.log(myName);
}
// chaiJi()


// Basic Arrow function
const newChai = ( ) => {
    let myName="AMAR AKBAR "
    console.log(myName);
}
// newChai(); 


// pure arrow function syntax
() => {}

// explicit return javascript arrrow function
const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(2,3));


// implicit return 
// parenthesis hata , return hata , and SAME line
const addthree = (num1,num2,num3) => num1+num2+num3

console.log(addthree(1,2,3));

// agar curly brace lgaya to return keyword lagega
// agar parenthesis laga to return keyword nahi lagega
const addThree= (num1,num2,num3) => (num1+num2+num3)
console.log(addThree(4,2,3));

// dealing with object
const Sum= (num1,num2) => (  {username:"rahmat"}  )
console.log(Sum(0,0))


// +++++++++++++++++++IIFE++++++++++++++++++++++++++++++++

// to protect global variables from being polluted

(function chai(){
    console.log('DB connected');
})();

// Syntax
//  (function)(parameters);