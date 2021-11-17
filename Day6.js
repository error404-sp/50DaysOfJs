const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    // write your solution here
    let array = str.split(" ");
    array.splice(wordLimit, (array.length - wordLimit));
    str = array.join(" ")

    return str;
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
