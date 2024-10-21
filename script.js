// Mild Challenges 

let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;

// 1. If divided evenly, how much would each sibling get for the week?

let eachSiblingGets = (weeklyAllowance / 3).toFixed(2);
console.log(`Each sibling gets: $${eachSiblingGets} `);

// 2. How many games can Jordan buy with their cut?

let gamesJordanCanBuy = Math.floor(eachSiblingGets / game);
console.log(`${sibling1} can buy ${gamesJordanCanBuy} games `);

// 3. The cost of games just went up by a dollar and shoes are on sale at 50% (half) off. Change the variables to their new prices.

game += 1; 
// Game price increased by $1
shoes *= 0.5;
 // Shoes are now 50% off

console.log(`New game price: $${game.toFixed(2)} , New shoes price: $${shoes.toFixed(2)} `);

// 4. Quinn and Ricardo are twins. If they put their money together, how many on sale shoes can they buy in a month (4 weeks)?

let combinedFunds = (eachSiblingGets * 2) * 4; 
// 4 weeks
let shoesTheyCanBuy = Math.floor(combinedFunds / shoes);
console.log(`Quinn and Ricardo can buy ${shoesTheyCanBuy} pairs of shoes in a month `);

// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own?

let gamesRicardoCanBuy = Math.floor(eachSiblingGets / game);
let gamesQuinnCanBuy = Math.floor(eachSiblingGets / game);
let totalGamesTogether = Math.floor((eachSiblingGets * 2) / game);
let additionalGames = totalGamesTogether - (gamesQuinnCanBuy + gamesRicardoCanBuy);

console.log(`They can buy ${additionalGames} more games together `);


// 6. Print out the three siblings' names. "The three siblings are __, __, and ___."
console.log(`The three siblings are ${sibling1}, ${sibling2}, and ${sibling3}. `);


// 7. Use console.log() and a built-in method to count how many characters are in Ricardo's name.
console.log(`Number of characters in Ricardo's name: ${sibling3.length} `);


// 8. Use console.log() and a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"
console.log(`Uppercase: ${sibling3.toUpperCase()} `);


// 9. Use console.log() and a built-in method to print out the string "ricardo montoya de la rosa ramirez"

console.log(`Lowercase: ${sibling3.toLowerCase()} `);

// 10. Use console.log() and a built-in method to print out Ricardo's name, but with all the instances of the letter a removed or deleted.
console.log(`Without 'a': ${sibling3.replace(/a/gi, '')} `);


// 11. Use console.log() and a built-in method to print out "De La Rosa"
console.log(`Extracted: ${sibling3.substring(19, 28)} `);



// Medium Challenges

// 12. Rewrite these function as an arrow function.
/// Then, call them with different inputs to check the result.

const getRandomNum = () => Math.floor(Math.random() * 100);
const greeting = (name) => `Hello ${name}, I'm glad you can make it!`;
const perfectRoot = (x) => {
    let root = Math.sqrt(x);
    return Math.floor(root) === root ? root : "No perfect root";
};

// Test arrow functions

console.log(`Random number: ${getRandomNum()} (Random number between 0-99)`);
console.log(greeting("Joanna")); 


console.log(`Perfect root: ${perfectRoot(16)} (Perfect root check)`);

// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.

// a. Add two numbers

const addNums = (x, y) => x + y;
console.log(`Sum of 4 and 6: ${addNums(4, 6)} (Adding two numbers)`);
console.log(`Sum of 10 and 5: ${addNums(10, 5)} (Adding two numbers)`);

// b. Special message for "Beyonce"

const isBeyonce = (name) => {
    return name === "Beyonce" ? "Welcome Queen!" : `Sorry ${name}, you're not Beyonce`;
};
console.log(isBeyonce("Beyonce")); 


console.log(isBeyonce("Ian")); 


// c. Reduce evens

const reduceEvens = (x) => (x % 2 === 0 ? x / 2 : x);
console.log(`Reduce evens for 10: ${reduceEvens(10)} (Even number reduced)`);
console.log(`Reduce evens for 11: ${reduceEvens(11)} (Odd number unchanged)`);

// 14. Write a function called shortenString(string) that returns the first 10 characters of a string if it is longer than 10
//remove all

const shortenString = (string) => (string.length > 10 ? string.substring(0, 10) : string);
console.log(`Shortened: "${shortenString("This string is too long")}" (String shortened)`); 
console.log(`Shortened: "${shortenString("Short")}" (String unchanged)`);

// Spicy Challenges

let burger = 5.99;
let fries = 3.99;
let soda = 1.99;

// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
/// If no burgers can be bought, return "Sorry, no burgers for you."

const buyBurgers = (budget) => {
    const numBurgers = Math.floor(budget / burger);
    return numBurgers > 0 ? numBurgers : "Sorry, you need a diet.";
};
console.log(`Burgers with $20: ${buyBurgers(20)} (Number of burgers)`); 
console.log(`Burgers with $5: ${buyBurgers(5)} (Number of burgers)`); 

// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
/// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.

const buyFood = (budget) => {
    const mealCost = burger + fries + soda;
    const meals = Math.floor(budget / mealCost);
    const leftover = (budget % mealCost).toFixed(2);
    return `You can buy ${meals} meals and will have $${leftover} left over.`;
};
console.log(buyFood(20)); 


// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length
const missingLeg = (hypotenuse, leg) => {
    if (hypotenuse <= leg) {
        console.log("The hypotenuse must be the largest side.");
        return;
    }
    const missingLegLength = Math.sqrt(hypotenuse ** 2 - leg ** 2);
    console.log(`Missing leg length: ${missingLegLength} (Calculated using Pythagorean theorem)`);
};
missingLeg(5, 3); 



// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
/// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
/// Write a function factorial(x) that finds the factorial of any integer.


const factorial = (x) => {
    if (x < 0) return "Invalid input";
    if (x === 0) return 1;
    let result = 1;
    for (let i = 1; i <= x; i++) {
        result *= i;
    }
    return result;
};

console.log(`Factorial of 3: ${factorial(3)} (3 = 6)`); 
console.log(`Factorial of 5: ${factorial(5)} (5 = 120)`); 






// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
/// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
/// Write a function factorial(x) that finds the factorial of any integer.
