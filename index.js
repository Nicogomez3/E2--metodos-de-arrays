const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// a)  Las pizzas que tengan un id impar.

const idImpar = pizzas.filter((pizza) => {
  if(pizza.id % 2 === 1) {
    console.log(`Las pizzas con id impar son id: ${pizza.id}`)
  }
})

console.log(`------`)

// b) Responder: ¿Hay alguna pizza que valga menos de $600?

const precioPizza = pizzas.filter((pizza) => {
  if(pizza.precio < 600) {
    console.log(`las pizzas con un valor menor a $600 son: ${pizza.nombre}`)
  }
})

console.log(`------`)

// c) El nombre de cada pizza con su respectivo precio.

const precioNombre = pizzas.forEach((pizza) => {
  const {nombre, precio} = pizza 
  console.log(`
  Nombre: ${nombre},
  Precio: ${precio}
  `)
})

console.log(`------`)

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo).

const ingredientes = pizzas.forEach((pizza) => {
  const {nombre, ingredientes} = pizza
  console.log(`
  Nombre: ${nombre},
  Ingredientes: ${ingredientes.join(" / ")}
  `)
})




