//the code below will add a new element to the end of the array and return the new length of the array. The pop() method will remove the last element from an array and return that element. The pop() method changes the length of the array.

console.log("Accessing the rows array:");
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("Deren");
let pushed= rows.push("Deren");
let popped = rows.pop();
console.log(pushed)
console.log(popped);
console.log(rows);