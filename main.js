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
const hamburger5 = {
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

const newRestaurant = { ...hamburger5.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger5 = { ...hamburger5 };
secondBurger5.maker.restaurant = newRestaurant;
secondBurger5.maker.name = "Chef Hyur";

console.log(hamburger5.maker.name); // "Chef Hyur"
console.log(secondBurger5.maker.name); // "Chef Hyur"
console.log(hamburger5.maker.restaurant.name); // "Hyur's II"
console.log(secondBurger5.maker.restaurant.name); // "Hyur's II"
//son stati creati 5 oggetti

//Code Question 6 bonus
const chef6 = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      },
    },
    isOpen: true,
  },
};
//Qual è il metodo migliore per clonare l’oggetto chef6, e perché?
//Il miglior metodo è lo spread perchè copia anche le funzioni anche se ci son oggetti annidati
const chef6copy = {
  ...chef6,
  restaurant: {
    ...chef6.restaurant,
    address: {
      ...chef6.restaurant.address,
    },
  },
};
console.log(chef6copy);

//Snack  (Bonus)
//Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni).
//Usa l’oggetto di Code Question 6 come test.
//Serve usare una funzione ricorsiva! (fai un po’ di ricerca)

function deepCopy(obj) {
  if (typeof obj !== "object") {
    return obj;
  }
  const copy = {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value !== "object") {
      copy[key] = value;
    } else {
      copy[key] = deepCopy(value);
    }
  }
  return copy;
}

console.log(deepCopy(chef6));
