// This code generates a centered triangle pattern using a specified character and number of rows. The `padRow` function creates each row with the appropriate number of characters, and the loop constructs the triangle by pushing each row into the `rows` array. Finally, it concatenates all rows into a single string and prints the result to the console.
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);