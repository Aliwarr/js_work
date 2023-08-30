
// object literals

const mySym=Symbol("key1")

const jsUser={
    name : "rahmat",

    "full name" : "rahmat imam rahbar",

    [mySym] : "myKey1",

    age : 18,
    location : "gzb" , email : "rahmt@com",
    isLoggedIn : false,
    LastLoginday :["monday", "wednesday"]
}
// jS by default takes keys as strings 


// console.log(jsUser.name);
// console.log(jsUser["full name"]);


// use sqaure bracket [] in the key to access the the values of symbol and specified string 

// console.log(jsUser[mySym]);


jsUser.email="rahmat@1234.com"
// console.log(jsUser.email);

// Object.freeze(jsUser)

jsUser.name="Rahat"
// console.log(jsUser.name);


jsUser.greeting = function(){
    console.log("hello all");
}


// console.log(jsUser.greeting());

// see the difference between them
// console.log(jsUser.greeting);  => this gives function return back, reference is given

jsUser.greetingTwo= function(){
    console.log(`hello js user,${this.name}`);
}

// console.log(jsUser.greetingTwo());



// singleton  :  objects made by constructor

const tinderUser= new Object()
tinderUser.id="123abd"
tinderUser.name = "Andreeeww"
tinderUser.isLoggedIn= false

//  console.log(tinderUser);

const regularUser= {
    email : "user@user.com",
    fullname : {
        userfullName :{
            firstname : "rahmat ",
            lastname : "imam rahbar"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullName);
// console.log(regularUser.fullname.userfullName.firstname);



// optional chaining : jab full name agr exist na karta ho to kya karega . denoted by question mark :  ?

// console.log(regularUser.fullname?.userfullName.firstname);

const obj1 ={ 1: 'a', 2: 'b'}
const obj2= {3: 'a', 4: "b"}

const obj3 = {obj1, obj2}                 /*worst idea */ 

const obj4= Object.assign(obj1,obj2)
const obj5= Object.assign({},obj1,obj2)


// console.log(obj3);
// console.log(obj4);
// console.log(obj5);


const obj6 = {...obj1,...obj2}
// console.log(obj6);

const Facebookuser=[
    {
        id:3,
        email:"124@g.com"
    },
    {
        id:5,
        email:"1235@g.com"
    },
    {
        id:4,
        email:"124@g.com"
    },
    {
        id:6,
        email:"142@g.com"
    }
]
// console.log(Facebookuser[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); 

// its output is in array, so all array functionality

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// +++++++++++++++destructuring Objects+++++++++++++++++
// mostly useed in react.js
const course={
    course :" javascript",
    price: "priceless",
    courseinstructor : "mySelf"
}

const {courseinstructor} = course
const{courseinstructor : instructor} = course

console.log(courseinstructor);
console.log(instructor);

/*
freeze, assign, hasownproperty, object.keys, 
*/