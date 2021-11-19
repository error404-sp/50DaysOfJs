const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
let diff = 0;
function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here
    let arr1 = new Date(dateText1)
    let arr2 = new Date(dateText2)
    let diff = (arr2.getTime() - arr1.getTime())/DAY_IN_MILLISECONDS;
    return diff;
}
console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)
