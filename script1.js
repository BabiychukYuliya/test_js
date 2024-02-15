// const array = [67, -56, 25, 98, -103, 87, -101];
// let max = array[0];

// for (let i = 1; i < array.length; i += 1) {
//   if (array[i] > max) {
//     max = array[i];
//   }
// }
// console.log(max);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce(
//   (acc, player) => acc + player.playtime / player.gamesPlayed,
//   0
// );
// console.log(totalAveragePlaytimePerGame);

const salary = [500, 650, 800, 950];
const total = salary.reduceRight((acc, elem) => acc + elem);
console.log(total); //2900
