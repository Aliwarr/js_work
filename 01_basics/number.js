// +++++++++++++++++Numbers++++++++++++++++++++++++++++++



// by this method of declaring a number , we cant extract all the properties/prototypes and methods of Number data type
const score= 400
// console.log(score);


// This is the correct way of declaring a number , by this method we can access all the prototype of Number data type
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());

// number is converted into string , now all the properties of strings will be applicable on it


// console.log(balance.toString().length); 

/* 
toFixed => used for decimal numbers in ecommerce   
toprecision, toLocaleString('en-IN') , minvalue, maxvalue, maxsafeinteger, 
*/


// ++++++++++++++++++++++++++Maths+++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));


// console.log(Math.random());
// console.log(Math.floor(Math.random()*10) +1);

const min=10;
const max=20;
console.log(Math.floor(Math.random() * (max - min +1) ) + min);


/*
ceil, floor, sqrt, power, min, max , random
*/