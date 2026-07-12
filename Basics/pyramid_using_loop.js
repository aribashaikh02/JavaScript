// This code creates a pyramid pattern using a loop. It defines a character to be used in the pyramid, the number of rows, and an array to hold each row of the pyramid. The first loop generates each row by repeating the character based on the current index and pushes it into the rows array. The second loop concatenates each row into a single string with newline characters for formatting. Finally, it logs the resulting pyramid pattern to the console.

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i));
}


let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);