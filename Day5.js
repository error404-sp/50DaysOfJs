//Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'
const str = 'XeroX';

function getTheGapX(str) {
    // write your solution here
    if(str.indexOf('X')!=-1 && str.lastIndexOf('X')!= -1){
        str = str.slice(str.indexOf('X'),str.lastIndexOf('X'));
        return str.length;
    }
   else{
       return -1;
   }

}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
