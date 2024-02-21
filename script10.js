const concerts = {
  Kyiv: new Date("2024-01-04"),
  Lviv: new Date("2024-07-02"),
  Dnipro: new Date("2024-04-21"),
  Kharkiv: new Date("2024-07-15"),
  Dnipro: new Date("2024-04-18"),
  Lviv: new Date("2024-07-10"),
};
// написати функцію, яка виводить масив міст в хронологічному порядку. Якщо концерт пройшов, то місто вилучити

function cityArr(concerts) {
  return Object.keys(concerts)
    .filter((el) => concerts[el] > new Date())
    .sort((a, b) => concerts[a] - concerts[b]);
}

console.log(cityArr(concerts));
