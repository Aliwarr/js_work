
let mydate= new Date()
// console.log(mydate);
// console.log(typeof mydate);
// console.log( mydate.toString());
// console.log( typeof mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate.toLocaleString());





let myCreateddate= new Date('2023, 1, 1')
// console.log(myCreateddate.toDateString());

myCreateddate=new Date('09-08-2023')
// console.log(myCreateddate.toLocaleDateString());


/*This is used in quiz apps, where we declare based on time stamps,   we compare the time stamps by created date and created time stamp

since the results of timestamp is in milliseconds from 01-01-1970 so we have to get the time in milliseconds of your created date-time.  

the method used is :   myCreatedDate.getTime()
*/

let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate= new Date();

// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());


// interesting

// console.log(newDate.toLocaleString('default', {
//     weekday : "long"
// }));

let testDate = new Date()
// console.log(testDate.getTime());
// console.log(testDate.getFullYear());
// console.log(testDate.getMonth());
// console.log(testDate.getDate()); 
// console.log(testDate.getHours());
// console.log(testDate.getMinutes());
// console.log(testDate.getSeconds());
// console.log(testDate.getMilliseconds());
// console.log(testDate.setHours(15));
//  console.log(testDate.setDate(10));
// console.log(testDate.setMonth(4));
// console.log(testDate.setFullYear(2022)); 
//  console.log(testDate.getTimezoneOffset());
// console.log(testDate.toISOString());
//  console.log(testDate.toJSON());
// console.log(testDate.toUTCString()) ;
// console.log(testDate.toLocaleDateString());
// console.log(testDate.valueOf());

 

// todateString, tolocaleString, toIsoString, toJSON, toLocaleDateString, toLocaleTimeString 
