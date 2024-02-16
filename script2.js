// 1. скільки разів кожен елемент зустрічається в масиві
const fruits = [
  "kiwi",
  "apple",
  "kiwi",
  "orange",
  "orange",
  "apple",
  "orange",
  "kiwi",
];

const count = {};

fruits.forEach((fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
});

console.log(count);
