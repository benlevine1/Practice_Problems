// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

const reverseInt = (number) =>{
    let newNumber = number.split().reverse().join('')
    console.log(newNumber);
} 