//this module needs to define and export a function called firePottery, that accepts these parameters(object that represents a piece of pottery
//made on the wheel, a number specifying  the firing temp of the kiln,)
//the function needs to add a new property called fired with the value of true
//the function must add the property of cracked to the object, must return true if the kiln temp is higher than 2200 degrees, false if less than 2200
//after new properties are applied return the object
export const firePottery = (temperature, potteryPiece) => {
  const pottery = {
    shape: potteryPiece.shape,
    weight: potteryPiece.weight,
    height: potteryPiece.height,
    id: potteryPiece.id,
    fired: true,
    cracked: temperature > 2200,
  };

  return pottery;
};
