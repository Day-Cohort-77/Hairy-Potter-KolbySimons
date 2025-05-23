//define a variable with the value of an empty array
let potteryToSell = [];
//declare and export a function called toSellOrNotToSell that will determine if a piece of pottery should be sold or not
//should accept a pottery object as an input
//if the weight is greater than or equal to 6 the function should add a price property with the value of 40, less than 6 should be 20
//do not add a price for cracked items
// if not cracked add to the module-level array to be sold
// return the augmented object
// define and export a function called usePottery that returns a copy of the array to be sold.

export const toSellOrNotToSell = (shouldISell) => {
  if (shouldISell.cracked === false) {
    if (shouldISell.weight >= 6) {
      shouldISell.price = 40;
    } else {
      shouldISell.price = 20;
    }
    potteryToSell.push(shouldISell);
  }
  return shouldISell;
};

export const usePottery = () => {
  return structuredClone(potteryToSell);
};
