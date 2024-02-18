// написати функцію, яка поверне true, якщо рядочок є поліндромом (читається однаково зліва-направо та зправа-на)
const palindrome = (myStr) => {
  myStr = myStr.toLowerCase();
  return myStr === myStr.split("").reverse().join("");
};

console.log(palindrome("anna"));
