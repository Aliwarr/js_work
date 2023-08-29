
let mydate= new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);



let myCreateddate= new Date('2023, 1, 1')
// console.log(myCreateddate.toDateString());

myCreateddate=new Date('01-14-2023')
// console.log(myCreateddate.toLocaleDateString());


/*This is used in quiz apps, where we declare based on time stamps,   we compare the time stamps by created date and created time stamp

since the results of timestamp is in milliseconds from 01-01-1970 so we have to get the time in milliseconds of your created date-time.  

the method used is :   myCreatedDate.getTime()
*/

let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCreateddate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate= new Date();

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


// interesting

newDate.toLocaleString('default', {
    weekday : "long"
})


// todateString, tolocaleString, toIsoString, toJSON, toLocaleDateString, toLocaleTimeString 
