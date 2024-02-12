const array = [67, -56, 25, 98, -103, 87, -101];
let max = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log(max);
