// Prompting user for input 
let first_word = prompt("The first word is:", "RACECAR");
let second_word = prompt("The second word is:", "RECORDER");

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Reverse the words
let first_reversed = reverseString(first_word);
let second_reversed = reverseString(second_word);

// Log original and reversed strings
console.log("Original  first word:", first_word);
console.log("Reversed  first word:", first_reversed);
console.log("Original second word:", second_word);
console.log("Reversed second word:", second_reversed);

// Log truth value if original equals reversed
console.log("Is first word a palindrome?", first_word === first_reversed);
console.log("Is second word a palindrome?", second_word === second_reversed);
