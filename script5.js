// записати рядочок у зворотньому порядку
const myStr = "pizza";

const stringOut = (str) => {
  const result = [];
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result.push(str[i]);
  }
  return result.join("");
};

console.log(stringOut(myStr));
