// When you use the first approach (const name = "rahmat"), you're working with a primitive data type (string). You can perform typical string operations and access string methods directly on the variable.

const name="rahmat"
const repoCount= 50

// console.log(name + repoCount);  => out dated syntax 



//  string interpolation using backticks

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// another method of declaring string

// When you use the second approach (const name = new String("rahmat")), you're working with a String object. String objects have properties and methods that you can use, but they behave differently from primitive strings in certain situations.

const gameName = new String("rahmatFZX")

// console.log(gameName[0]);

// In JavaScript, you can access the prototype of an object using the __proto__ property.

// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('t'));


const newName = new String(" Rahmat imam-   rahbar ")

// console.log(newName.trim());  /* removes spaces,tabs,newline characters from beginning and end of a string */

// console.log(newName.split('-')); /* it  is used to split a string into an array of substrings based on a specified delimiter. */

// console.log(newName.replace('imam-   rahbar', 'Ali Khan'));                     /* It is used to search for a specified substring or pattern in a string and replace it with another string.*/
                 
// console.log(newName.charCodeAt(5));             /* It  is used to return the Unicode value (integer representation) of the character at a specified index within a string. */

// let text = "ahmat";
// console.log(newName.match(text));  /* It is used to search for a specified pattern (regular expression) within a string and return an array of matches or null if no match is found.*/

// text = /ahmat/g;    /*It is regular expression i.e regex */
// console.log(newName.match(text));


// console.log(newName.localeCompare("rahmat imam-rahbar", undefined, { sensitivity: 'base' }));          /* It  is used to compare two strings, considering their Unicode values, based on the locale and language settings of the user's environment.*/

// console.log(newName.substring(7,11));  / *it is used to extract a portion of a string based on two indices (start and end) and create a new string from that portion. */



// newName.blink            depricated because it isa now distracting               <blink>This text will blink.</blink>

// console.log(newName.toLocaleUpperCase());        /* It  is used to convert all the alphabetic characters in a string to their uppercase equivalents, taking into account the rules and conventions of the specified locale.*/

// console.log(newName.toLowerCase ());             /* It  is used to convert all the alphabetic characters in a string to their lowercase equivalents. */

// console.log(newName.codePointAt(5))              /* it  is used to retrieve the Unicode code point value at a specified index within a string.  The codePointAt method is particularly useful when working with non-BMP characters, such as emoji or characters from less commonly used scripts, where a single character may span multiple 16-bit code units.*/

const lname = "azzu bhai"
// console.log(newName.concat(" ", lname));                   /* it  is used to concatenate (join together) two or more strings and create a new string that contains the combined text. */


const anotherName = new String("José"); 
// console.log(anotherName.normalize());               /* s used to normalize Unicode strings. Unicode normalization is a process that ensures that different representations of the same character are converted into a single, standardized form. This is important when dealing with characters that have multiple representations, such as accented characters.*/


// console.log(newName.padEnd(30,"hello"));         /* It  is used to pad the current string with a specified string until it reaches a desired length.*/


// console.log(newName.repeat (2));          /* It  is used to create a new string by repeating the original string a specified number of times. */

console.log(newName.valueOf() );                 /* it is a method of the Object prototype, and it's not specific to strings. It's used to return the primitive value of an object. When you call valueOf on a String object, it essentially returns the primitive string value that the object wraps.*/

/*
lowercase , slice , substring , splice , trim , replace , includes , split , small, blink, bold, concat, endswith, character, constructor
*/
