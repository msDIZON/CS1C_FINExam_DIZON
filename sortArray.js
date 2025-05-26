// Prompt user for numbers and names 
let numbers = prompt("Random Numbers:", "20,07,21,65,9,44,18,80,15,37");
let names = prompt("Random Names:", "Dina,Christine,Jasmine,John John,Hazel,Kimberly");

// Converting input strings to arrays
numbers = numbers.split(',').map(num => parseInt(num.trim(), 10));
names = names.split(',').map(name => name.trim());

// Merging both arrays
let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

// Sorting numbers numerically in reverse
numbers.sort((a, b) => a - b);
let sortedNumbers = numbers.toReversed();
console.log("Numbers sorted in reverse:", sortedNumbers);

// Sort ing names alphabetically
names.sort();
console.log("Names sorted in alphabetical order:", names);
