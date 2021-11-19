const number = '+919876543210';

function validateMobile(number) {
    // write your solution here
    return (number.includes('+91') || number[0] == '0' || number.length == 10);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)
