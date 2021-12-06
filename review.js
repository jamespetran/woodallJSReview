/* this is a block comment */
/* 
Jargon!!

.  - DOT
() - parenthesis
[] - square brackets/braces
{} - curly brackets/braces

<   - less than
>   - greater than
    ALSO CALLED angle brackets in html

/   - slash, forward slash, whack
\   - backslash

!   - exclamation point, bang, not
#   - hashtag, pound, octothorp
*   - star, asterisk

||  - or operator, pipes
&&  - ampersands, and operator
$   - bling, cash money, jQuery
NaN - not a number, bread🍞

*/

/*
Primitive datatypes

    Strings     'tacos'
    Numbers     12345
    Boolean     true/false
    Undefined   undefined
    Null        null

Complex datatypes

    Arrays      [1,2,3,4,5], ["hello", "world"]
    Objects     { firstName: "James" }

*/

let nothing = null;

// 🐫 always use camelCase with js
let firstName = "James"

// KEBAB Case // commonly used in html
// <div class="first-name">James </div>

// Other naming conventions
// snake_case
// kebab-case
// PascalCase or UpperCamelCase

let person = {
    firstName: "James"
    lastName: "Petran"
    age: 31
}


function sum(a,b){
    return a+b
}


/**
 * Expressions
 * 
 * Operators
 * 
 */
//an expression evaluates to a single value
7 + 3; //10
sum(7,3); //10

let aNumber=7+3; //10
let anotherNumber=sum(7,3); //10

console.log(`my fav number is ${aNumber}`);
console.log(`my fav number is`, sum(7,3));

//increment operator
anotherNumber++; //11
// exact same as
anotherNumber = anotherNumber + 1; // 12 

// addition assignment operator
anotherNumber += 10; // 22
//equivalent to 
anotherNumber = anotherNumber +10; //32
// addition assignment can also be used to concat strings...so watch out lol

//theres modulo %= too
// +=
// -=
// *=
// /=
// these assignment operators only work w variables

NaNNaNNaNNaN + "batman";

/*
conditionals
*/

if (someBoolean) {
    //then do this
}
else if (someOtherBoolean) {
    //then do that
}
else {
    //do this if nothing else is truthy
}

//conditional operator
if (myNumber > 8) {
    //do whatever...
}
//this will always return a boolean


/**
 *  >   Greater than
 *  >=  Greater than or equal to
 *  <   Less than
 *  <=  Less than or equal to
 *  === Triple equals (equals)
 *  ==  Double equals (corece types then compare)
 *  !== Not equals
 *  !=  Not equals (coerce types)
 */

'5' == 5;
//dont do this
//do this instead:
Number('5') === 5;

/**
 *  Array and loops!
 *  An array is a list of things
 */
let numbers = [1,2,3,4,5];
let beverages = [
    'Bubly',
    'Jasmine tea',
    'water',
    'coffee'
];

/**
Kinds of loops:
    for..of
    for..in
    for
    while
 */

for (let beverage of beverages) {
    console.log(`I am drinking ${beverage}`);
}
//for..of works great for arrays

for (let i = 0; i < beverages.length; i++) {
    let beverage = beverages[i];
    console.log(`I am drinking ${beverage}`);
}
//for loops work well when looping without using an array...they are more flexible that for..of

//for..in returns the index of the array...not that good


