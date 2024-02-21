// написати функцію, яка приймає рядочок та підраховую кількість голосних літер в цьому рядочку

const counterVowels = (str) => {
  let counter = 0;
  const vowels = ["a", "i", "u", "o", "e"];
  for (let char of str) {
    if (vowels.includes(char)) {
      counter += 1;
    }
  }
  return counter;
};

console.log(counterVowels("mamamamamam"));
