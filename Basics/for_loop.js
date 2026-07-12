// 1. a const variable cannot be reassigned like a let variable.
// 2. A const variable also cannot be uninitialized.
// 3. A const variable can be an object or an array, but the contents of the object or array can be changed.

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  console.log(i);
}
