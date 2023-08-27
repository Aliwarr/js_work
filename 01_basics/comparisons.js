// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2"> 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null <= 0);
// console.log(null < 0);

/* 
the reason for unusual output is that equality check and comparison check works differently
comparisons convert null to a number , treating it as a zero thats why (null >= 0) is true where as (null == 0) is false
*/


// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);
// console.log(undefined < 0);

//  === (strict check) => check for both data and data types

console.log(2=="2");
console.log(2==="2");
