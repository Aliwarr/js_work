const myArr2=[0,2,5,2,6,8, 'rahmat', 'azzu', true]
// console.log(myArr2[4]);

const myArr= new Array(2,3,8,4,7,6)
// console.log(myArr[0]);

// ++++++++++++++++++Arrays Methods+++++++++++++++++++++

myArr.push(6)
// console.log(myArr)

myArr.pop()
// console.log(myArr);


myArr.unshift(9)
// console.log(myArr);
// this method adds number into the starting position and shift all the numbers one index up,  for few numbers it is ok, but for huge datait is so much loading

const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

const marvelHeros=["thor","doctor strange","iron man","spider man"]
const dcHeros=["batman","flash","superman","joker"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);


 const allheros=marvelHeros.concat(dcHeros)
// console.log(allheros);


// by using spread operator
const allNewHeros = [...marvelHeros,...dcHeros]
// console.log(allNewHeros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray=anotherArray.flat(Infinity)
// console.log(realAnotherArray);


 console.log(Array.isArray("rahmat"));
 console.log(Array.from("rahmat"));

//  interesting case of from() while converting objects because it gets confused whether to convert to convert key to array or value to array 

console.log(Array.from({name: "rahmat"}));


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));


/*
shallow copy, deep copy, shift , includes, index , join converts to string, slice , splice, from => (convert to array of any type), of (it ais also used to convert to array)
*/