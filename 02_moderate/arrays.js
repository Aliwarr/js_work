// Usual method to declare an array

const myArr2=[0,2,5,2,6,8, 'rahmat', 'azzu', true]
// console.log(myArr2[4]);



// declaration of array using new and Array keyword

// const arr = new Array() is less common and is typically used when you want to create an array with a specific length

let myArr= new Array(2,3,8,4,7,6)
// console.log(myArr[0]);
// console.log(myArr);



// ++++++++++++++++++Arrays Methods+++++++++++++++++++++

myArr.push(6)                       /*changes the actual array , pushes number at last*/
// console.log(myArr.length)  
// console.log(myArr)  

myArr.pop()                         /*changes the actual array and pop element from last*/
// console.log(myArr.length);
// console.log(myArr);

// console.log(myArr.length);
const checkMyArr = myArr.join("-")      /*changes the array object into string with character between elements*/
// console.log(typeof checkMyArr);
// console.log(typeof myArr);



myArr.unshift(9)
// console.log(myArr.length);
// this method adds number into the starting position and shift all the numbers one index up,  for few numbers it is ok, but for huge datait is so much loading

const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

const marvelHeros=["thor","doctor strange","iron man","spider man"]
const dcHeros=["batman","flash","superman","joker",["ra-one", "g-one", "krrish"]]



// marvelHeros.push(dcHeros)
// console.log(marvelHeros);


 const allheros=marvelHeros.concat(dcHeros)
// console.log(allheros);
// console.log(allheros.flat(Infinity));


// by using spread operator
const allNewHeros = [...marvelHeros,...dcHeros]
// console.log(allNewHeros);
// console.log(allNewHeros.flat(Infinity));

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray=anotherArray.flat(Infinity)
// console.log(realAnotherArray);


//  console.log(Array.isArray("rahmat"));
//  console.log(Array.from("rahmat"));
//  console.log(Array.from("198"));
//  console.log(Array.from({
//     lengths: 50,
//     breadth : 80
//  }));

//  interesting case of from() while converting objects, because it gets confused whether to convert key to array or value to array 

// console.log(Array.from({lengths: 50}));


let score1=100
let score2=200
let score3=300
let score4=100
let score5=200
let score6=300

// console.log(Array.of(score1,score2,score3,score4,score5,score6));

//  ++++++++++++++++++++++++++++++++++++Arrays important methods++++++++++++++++++++++++++++++++++++

myArr = [2,4,6,81,8,50 ,91,9,10,13,34,76,98,123]


// console.log(myArr.map(function(e){return e*2}));
// console.log(myArr.map( (e) => e*2 ));


// console.log(myArr.filter(function(e){return e%2===0}));
// console.log(myArr.filter( (e) => e % 2 === 0 ));

// console.log(myArr.forEach((e)=> console.log(e)));
// myArr.forEach((e)=> console.log(e))

// console.log(myArr.copyWithin(3));


const myNewArr2 = myArr.entries()
// for(const [index,value] of myNewArr2){
//     console.log(`index : ${index}, value : ${value}`);
// }
// console.log(myArr);


const allEven = myArr.every( (element) => element % 2 === 0 )
// console.log(allEven);


// myArr.fill(1 , 0, 5)
// console.log(myArr);


// console.log(myArr.find( (element) => element > 20));

// console.log(myArr.findIndex( (element) => element > 20));


// const removedElements = myArr.splice(2,3)       /* changes the original array */
// console.log(myArr);
// console.log(removedElements);


// const newArray = myArr.slice(2,6)                /* doesnot changes the original array */
// console.log(myArr);
// console.log(newArray);

// const doubleAndFlattened = myArr.flatMap( (value) => [value, value*2])
// console.log(doubleAndFlattened);
// console.log(myArr);


// console.log(myArr.indexOf(348));

// console.log(myArr.includes(34));


// const myKeyIterator = myArr.keys()               /* can be benificial in dealing with objects key & values */
// for(const key of myKeyIterator){
//     console.log(key);
// }


// console.log(myArr.lastIndexOf(34));

// const sum = myArr.reduce( (accumulator , currVal) => accumulator + currVal, 0)
// console.log(sum);


// console.log(myArr.some( (value) => value > 100));


// console.log(myArr.sort( (a , b) => a - b));      /* compares two values either negative result or positive */
// console.log(myArr.sort());                                       /* this compares only first digit */


// console.log( myArr.toString());
// console.log(typeof myArr.toString());



/*
shallow copy, deep copy, shift , includes, index , join converts to string, slice , splice, from(convert to array of any type), of(it also also used to convert to array)
*/

/* 

1) .join converts the array into string
2) .from converts to arrays
3) .of converts to array
4) .toString() converts arrays to string seperated by comma

*/