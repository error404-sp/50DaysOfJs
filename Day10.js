const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    // write your solution here
    const filteredArray = array.filter(element=> element.field !== filterField);
    return filteredArray;
    
    
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)
