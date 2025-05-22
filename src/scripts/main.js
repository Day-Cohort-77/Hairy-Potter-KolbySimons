// Imports go first
import { makePottery } from "./PotteryWheel.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 5);
console.log(mug);
let plate = makePottery("Plate", 2, 1);
console.log(plate);
let bowl = makePottery("Bowl", 3, 6);
console.log(bowl);
let vase = makePottery("Vase", 8, 12);
console.log(vase);
let pitcher = makePottery("Pitcher", 5, 8);
console.log(pitcher);
// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
