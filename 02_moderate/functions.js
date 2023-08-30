function sayMyName(){
    console.log('r');
    console.log('a');
    console.log('h');
    console.log('m');
    console.log('a');
    console.log('t');
}

// sayMyName();
function addTwoNumbers(number1, number2){
    console.log(number1+number2);
}
// addTwoNumbers(3,4)

// let ans= addTwoNumbers(3,8)
// console.log(ans);

/* 
the reason for result is undefined because console.log() does not return the value. to return the value we have to specify the return explicitally
*/

function addThreeNumbers(num1,num2,num3){
    let result = num1+num2+num3
    return result
}
const result = addThreeNumbers(6, 8, 9)
// console.log(result);

function logInUserMessage(username){
    if(!username){
        console.log('please enter a username');
        return
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage()); 



// for default value as sammy ,if not given username

function logInUserMessage(username ="sammy"){
    if(!username){
        console.log('please enter a username');
        return
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage());



function calculatePriceOne(num1){
    return num1
}
// console.log(calculatePriceOne('1000'));




// Rest operator is used in this type of scenario. It adds all the arguments in the array

// although this three dot is called as rest operator as well as spread operator
function calculatePriceMany(...num1){
    return num1
}
// console.log(calculatePriceMany('1000',"200","4000"));


// handling objects in functions

const user={
    username: "rahmat",
    price: 1999
}


function handleObjects(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObjects(user)  /* calling function by passing object */
handleObjects({     /*passing directly object */
    username: "rahat ",
    price: 399
})


const myNewArray=[200,400,600,100]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([900,800,700,600]));



// another method of declaring functions   addTwo is called expression 
const addTwo= function(num){
    return num+2
}