//Function which returns a random number in the given range

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
   let randomNumber = Math.floor((Math.random() *(rangeEnd - rangeStart)) + rangeStart)
	return randomNumber;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)
