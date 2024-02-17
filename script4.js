// отримати єдиний масив улюблених піц
const friends = [
  { name: "alex", pizzas: ["cheese", "papperoni"] },
  { name: "mike", pizzas: ["salami", "margarita"] },
  { name: "stas", pizzas: ["meat"] },
  { name: "anna", pizzas: ["fish"] },
];

const pizzas = friends.reduce((acc, current) => {
  return [...acc, ...current.pizzas];
}, []);

console.log(pizzas); //['cheese', 'papperoni', 'salami', 'margarita', 'meat', 'fish']
