// Prompt user for names and ages
let Array1 = prompt("Names:", "Jasmine,Rico,Carlo,Dina,Kimmy");
let Array2 = prompt("Ages:", "24,18,5,37,22");

// Converting input strings into an arrays
Array1 = Array1.split(',').map(name => name.trim());
Array2 = Array2.split(',').map(age => parseInt(age.trim(), 10));

// Creating a  multi-dimensional array
let multi_Dimentional_Array = [Array1, Array2];

// Restructuring  to (name, age) pairs
let restructuredArray = [];
for (let i = 0; i < Array1.length; i++) {
    restructuredArray.push([Array1[i], Array2[i]]);
}

// Log each (name, age) pair per line
restructuredArray.forEach(pair => {
    console.log(pair);
});
