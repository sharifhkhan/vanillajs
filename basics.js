const POSITIVE_INTEGER = 1
const NEGATIVE_INTEGER = -1
const ZERO = 0

console.log(POSITIVE_INTEGER / ZERO) 
// Infinity

console.log(NEGATIVE_INTEGER / ZERO) 
// -Infinity

console.log(ZERO / ZERO)
// NaN

console.log(19 % 12)
// Remainder is 7 // JS does remainer
// Mod is 7 // JS does NOT do modulo
// Remainder and mod are the same value

console.log(19 % -12) 
// Remainder is 7 // JS does remainer
// Mod is -5 // JS does NOT do modulo
// Remainder and mod are NOT the same value

let a = 2.1, b = 4.6, c = a + b
console.log(c)
// Actual result is 6.699999999999999
// Expected value was 6.7

// These values are falsy, all other values are truthy 
// None of the if statements will result in a console log
if (false) console.log('say falsy one more time')
if (0) console.log('say falsy one more time')
if ('') console.log('say falsy one more time')
if ("") console.log('say falsy one more time')
if (null) console.log('say falsy one more time')
if (undefined) console.log('say falsy one more time')
if (NaN) console.log('say falsy one more time')

let theValueIsUndefined
console.log(theValueIsUndefined)

let theValueIsNull = null
console.log(theValueIsNull)

// empty array
let anArray = []
console.log(anArray)

// initilized array
let initArray = [0,1,2]
console.log(initArray)

// length
console.log(initArray.length)