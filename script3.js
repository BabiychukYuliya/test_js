// створити функцію, яка групує студентів за віком. На виході отримати об'єкт, де ключ - вік, а значення масив студентів

const students = [
  { name: "alex", age: 20 },
  { name: "mike", age: 24 },
  { name: "masha", age: 20 },
  { name: "stas", age: 18 },
];

const isAgeIdentical = (array) => {
  const result = {};

  array.forEach((element) => {
    if (result[element.age]) {
      result[element.age].push(element);
    } else {
      result[element.age] = [element];
    }
  });
  return result;
};

console.log(isAgeIdentical(students));
