const time = '01:59PM';

function convertTo24HrsFormat(time) {
    // write your solution here
    if (time.includes("AM")) {
        time = removeLastTwo(time);
        if(time[0]== 12){
           time[0] = 00;
        }
         if(time[0].length != 2){
       time[0] = '0' + time[0];
   }
   else if(time[1].length != 2){
        time[1] = '0' + time[1];
   }
        
        time = time.join(":")
        
    }
    else {
        time = removeLastTwo(time);
        if(time[0]!= 12){
           time[0] = Number(time[0])+12;
        }
        if(time[0].length == 1){
       time[0] = '0' + time[0];
   }
   else if(time[1].length == 1){
        time[1] = '0' + time[1];
   }
        time = time.join(":")
    }
   


    return time;
}
function removeLastTwo(time) {
    time = time.split("")
    time.splice(time.length - 2, 2)
    time = time.join("");
    time = time.split(":");
    return time;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
