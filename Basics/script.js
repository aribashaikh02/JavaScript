//Javascript Basics

//The code below prints a pyramid using console.log() in JavaScript.
console.log("Pyramid using JavaScript Basics:");
console.log("     #     ");
console.log("    ###    ");
console.log("   #####   ");
console.log("  #######  ");
console.log(" ######### ");
console.log("###########");


//The code below accesses the developer variable with its name in the console.log().
console.log("\nAccessing the developer variable:");   
let character = 'Hello';
console.log(character);
character = "World";
console.log(character);


//The code below accesses the secondCharacter variable with its name in the console.log().
console.log("\nAccessing the secondCharacter variable:");
let character = 'Hello';
console.log(character);
character = "World";
let secondCharacter;
secondCharacter = character;
console.log(secondCharacter);

//The code below accesses the count variable with its name in the console.log().
console.log("\nAccessing the count variable:");
let count = 8;
console.log(count + 1);
console.log(count * 4);
console.log(count - 4);
console.log(count / 6);

//The code below accesses the rows variable with its name in the console.log().
console.log("\nAccessing the rows variable:");
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);
rows[2] = 10;
console.log(rows);

console.log("\nAccessing the rows variable:");
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);
rows[rows.length-1] = 10;
console.log(rows);

console.log("\nAccessing the cities variable:");
let cities = ["London", "New York", "Mumbai"]
console.log(cities);
cities[2]="Mexico City"
console.log(cities);