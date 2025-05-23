// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 5);
let plate = makePottery("Plate", 2, 1);
let bowl = makePottery("Bowl", 3, 6);
let vase = makePottery("Vase", 8, 12);
let pitcher = makePottery("Pitcher", 5, 8);

// Fire each piece of pottery in the kiln
let firedMug = firePottery(2100, mug);
let firedPlate = firePottery(2200, plate);
let firedBowl = firePottery(2400, bowl);
let firedVase = firePottery(2100, vase);
let firedPitcher = firePottery(2200, pitcher);

// Determine which ones should be sold, and their price
let toSell = toSellOrNotToSell(firedMug);
console.log(toSell);
// Invoke the component function that renders the HTML list
