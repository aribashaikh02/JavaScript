// This is a simple example of a loop that counts from 0 to 7 and concatenates the numbers into a string.

const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = ""

// The for...of loop iterates over the elements of the rows array and concatenates them into the result string.
for (const row of rows) {
  result = result + row;
}

console.log(result);