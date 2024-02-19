// послідовність Фіббоначчі - числа, де кожне наступне число є сумою двох попередніх.
// Наприклад:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const fibbonacci = (num) => {
  if (num < 2) {
    return num;
  }
  return fibbonacci(num - 1) + fibbonacci(num - 2);
};

console.log(fibbonacci(13)); // 55 ([8] = 21 + [9] = 34)
