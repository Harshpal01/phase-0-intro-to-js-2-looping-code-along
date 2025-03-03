// Code your solutions in this file
function writeCards(names, event) {
    let messages = [];  // Create an empty array to store messages
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;  // Return the array of messages
}
// uses for loop to iterate over each name

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;  // Decrement the number
    }
}

// Example Usage
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
countDown(10);

// uses while loop to print numbers from given interger down to 0