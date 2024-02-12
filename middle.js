function gimme(inputArray) {
    const sortedArray = inputArray.slice().sort((a, b) => a - b);
    const median = sortedArray[1];
    return inputArray.indexOf(median);
}

// Test cases
console.log(gimme([2, 3, 1]));  // Output: 0
console.log(gimme([5, 10, 14])); // Output: 1
