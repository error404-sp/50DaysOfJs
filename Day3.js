//Write a program to reverse a given integer number
const num = 3849;

function reverseGivenInteger(num) {
    // write your solution here
    num+="";
    newString = num.split("").reverse().join("")

    return Number(newString);
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)
