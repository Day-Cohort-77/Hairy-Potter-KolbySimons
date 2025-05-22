//Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1.
let pieceOfPottery = 1;

// define and export a function named makePottery .
// must accept these values as inputs(shape/type of pottery, weight, height)
// must return an object with these properties on it(shape, weight, height, id)
export const makePottery = (shape, weight, height) => {
  const pottery = {
    shape: shape,
    weight: weight,
    height: height,
    id: pieceOfPottery,
  };
  pieceOfPottery++;

  return pottery;
};
