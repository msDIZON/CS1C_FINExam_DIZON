// Create an empty array
let numbers = [];

// Prompt user for numbers and push to array
let input = prompt("Random Numbers:", "42,18,5,63,37,87,4,25,30,78");
input.split(',').forEach(num => numbers.push(parseInt(num.trim(), 10)));

console.log("Original array:", numbers);

// Bubble Sort function with comparison logging
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
            if (arr[j] > arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
                console.log(`Swapped: ${arr[j]} and ${arr[j + 1]} -> [${arr.join(', ')}]`);
            }
        }
        if (!swapped) break;
    }
    return arr;
}

// Sort and log the sorted array
let sortedArray = bubbleSort(numbers);
console.log("Sorted array:", sortedArray);
