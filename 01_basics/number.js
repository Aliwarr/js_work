// +++++++++++++++++Numbers++++++++++++++++++++++++++++++



// by this method of declaring a number , we can not extract all the properties/prototypes and methods of Number data type
// It doesn't have any associated properties or methods because it's a primitive value.
let score= 400

// console.log(typeof score);
// console.log(score);
// score.toFixed(2)
// console.log(typeof score.toString());
// console.log( score.toString().length);


// This is the correct way of declaring a number , by this method we can access all the prototype of Number data type
// It has associated properties and methods because it's an object created from the Number constructor.

const balance = new Number(100)

// console.log(typeof balance);
// console.log(balance);
// console.log(score.toFixed(2));


// console.log(balance.toString());

// number is converted into string , now all the properties of strings will be applicable on it


// console.log(balance.toString().length); 

/* 
toFixed => used for decimal numbers in ecommerce   
toprecision, toLocaleString('en-IN') , Math.min(), Math.max(), Number.MAX_SAFE_INTEGER, 
*/


// ++++++++++++++++++++++++++Maths+++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));


// console.log(Math.random());
// console.log(Math.floor(Math.random()*10) +1);

const min=10;
const max=20;
// console.log(Math.floor(Math.random() * (max - min +1) ) + min);

let digit = 10.281
console.log(Math.floor(digit));
// console.log(Math.SQRT1_2);

/*
ceil, floor, sqrt, power, min, max , random
*/