" use strict";
// treat all js code with newer version of javascript

// alert("hello")

//  it is used in browser, not in node.js

// console.log("hello");  console.log("rahmat")
// not a good code readability

let name="rahmat"
let age=18
let isLoggedIn=false
const outsideTemp=null

const id = Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid);

// primitive data types  : call by value

// Number => 2 to the power 53
// BigInt => use in scientific numbers
// String => ""
// Boolean => true/false
// null => standlne value
// undefined => not assigned value
// Symbol => uniquenes


// non primitive data types : call by reference

// Object

const myInfo= {
    name:"rahmat",
    age : 18,
    email:"rahmat@123.com",
    isLoggedIn:false
}

// Arrays

const heros=["shaktiman", "nagraaj", "krrish"]

// functions

const myFun = function(){
    // console.log("hello all");
}

// console.log(typeof myFun);

// console.log(typeof "rahmat");
// console.log(typeof null);
// console.log(typeof undefined);


// ++++++++++++++++++++++++memory+++++++++++++++++++++++++


// stack memory is occupied by primitive data types

let myYoutubeName = "rahmat.imam.offficial"
let myAnotherYoutubeName = myYoutubeName

myAnotherYoutubeName = "rahmat.official"
console.log(myAnotherYoutubeName);
console.log(myYoutubeName);


// heap memory is occupied by non primitive data types

let userOne = {
    email: "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "rahmat@google.com"

console.log(userOne.email);
console.log(userTwo.email);