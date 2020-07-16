// Part 1
// Nested Objects
const menu = {
    pepperoni: {
        toppings: ["Cheese", "Pepperoni", "Sauce"],
        price: 12.00
    },
    supreme: {
        toppings: ["Olives", "Pepperoni", "Onions"],
        price: 15.00
    },
    taco: {
        toppings: ["Lettuce", "Sour Cream", "Beef"],
        price: 15.00
    },
    meatLovers: {
        toppings: ["Beef", "Sausage", "Cheese"],
        price: 15.00
    },
    hawaiian: {
        toppings: ["Beef", "Sausage", "Cheese"],
        price: 15.00
    }
}

// Part 2
// Object is a global variable with various methods that can be called
console.log(Object.keys(menu))

// Part 3
// .hasOwnProperty is a method of all objects that can be used that returns true or false if the object contains that key
// anObject.hasOwnProperty('key')
console.log(menu.hasOwnProperty('banana'))