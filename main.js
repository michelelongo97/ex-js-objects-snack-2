//Code Question 1
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = "Double Cheese Burger";
secondBurger.weight = 500;
//console.log(hamburger.name); //Double Cheese Burger
//console.log(secondBurger.name); // Double Cheese Burger
console.log(hamburger.name);
console.log(secondBurger.name);
// sempre e solo un oggetto

//Code Question 2
const hamburger2 = {
  name: "Cheese Burger",
  weight: 250,
  ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
};

const secondBurger2 = { ...hamburger2 };
secondBurger2.ingredients[0] = "Salad";
//console.log(hamburger2.ingredients[0]); //Salad
//console.log(secondBurger2.ingredients[0]); //Salad
console.log(hamburger2.ingredients[0]);
console.log(secondBurger2.ingredients[0]);
// sono stati creati due oggetti grazie allo spread operator

//Code Question 3
const hamburger3 = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29,
  },
};

const secondBurger3 = structuredClone(hamburger3);
const thirdBurger3 = structuredClone(hamburger3);
// son stati creati 9 oggetti

//Code Question 4
const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
};
// Il miglior metodo per clonare l'oggetto chef è lo spread operator perchè copia anche la funzione

const restaurant = {
  name: "Hyur's Burgers",
  address: {
    street: "Main Street",
    number: 123,
  },
  openingDate: new Date(2025, 3, 11),
  isOpen: false,
};
// Il miglior metodo per clonare l'oggetto restaurant è structuredClone() in quanto copierebbe anche gli oggetti complessi (es. data)

//Code Question 5 bonus

//Code Question 6 bonus

//Snack  (Bonus)
//Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.
//Serve usare una funzione ricorsiva! (fai un po’ di ricerca)
