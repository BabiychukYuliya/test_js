// написати функцію, яка виводить у консоль числа від 1 до n, де n - це ціле число, яке функція приймає.
// виводити fizz замість чисел, кратных 3;
// виводити buzz замість чисел, кратных 5;
// виводити fizzbuzz замість чисел, кратных як 3 так і 5;

const task_7 = (num) => {
  for (let i = 1; i <= num; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else console.log(i);
  }
};

console.log(task_7(15));
