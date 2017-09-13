//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total) {
  var smallBarrel = 60;
  var largeBarrel = (total - (small *smallBarrel)) / large;
    return largeBarrel;
};
barrels(2, 5, 825);

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuel, miles) {
  const circumference = 24901;
  const totalMiles = circumference / miles;
  const cost = totalMiles * fuel;
    return cost;
};
shipFuelCost(3, 12);

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};




