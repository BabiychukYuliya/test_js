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

// const count = {};

// fruits.forEach((fruit) => {
//   count[fruit] = (count[fruit] || 0) + 1;
// });

// console.log(count); //{kiwi: 3, apple: 2, orange: 3}

// 2. Створити масив, якій містить тільки унікальні значення ["kiwi", "apple","orange"]
const result = [];

fruits.filter((fruit, index, array) => {
  if (array.indexOf(fruit) === index) {
    result.push(fruit);
  }
});

console.log(result);
