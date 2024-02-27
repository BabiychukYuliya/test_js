// написати функцію, яка приймає матрицю 3*3 та перевертає її на 90 градусів за годинниковою стрілкою
// [1, 2, 3]    [7, 4, 1]       00  01  02     20 10 00
// [4, 5, 6] -> [8, 5, 2]       10  11  12 ->  21 11 01
// [7, 8, 9]    [9, 6, 3]       20  21  22     22 12 02

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate(source) {
  const result = source[0].map((_) => []);
  for (let i = 0; i < source.length; i += 1) {
    for (let j = 0; j < source.length; j += 1) {
      const value = source[i][j];
      result[j][source.length - 1 - i] = value;
    }
  }
  return result;
}

function print(array) {
  array.forEach((el) => console.log(el));
}
print(rotate(matrix));
