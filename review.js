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

