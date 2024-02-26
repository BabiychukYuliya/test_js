// видалення повторюваних значень в рядку
function removeDuplicates(str) {
  //   const res = [];
  //   const obj = {};

  //   for (let i = 0; i < str.length; i += 1) {
  //     const char = str[i];

  //     if (!obj[char]) {
  //       obj[char] = true;
  //       res.push(char);
  //     }
  //   }
  //   return res.join("");
  return Array.from(new Set(str)).join("");
}

console.log(removeDuplicates("abcdabcdefghijklmnopqrst")); //abcdefghijklmnopqrst
