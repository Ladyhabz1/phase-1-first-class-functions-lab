// Code your solution in this file!
// 1. Return the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // 2. Return the last two drivers from an array
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // 3. Create an array containing the two driver selection functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // 4. Create a function that takes a multiplier and returns a function
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // 5. Create a fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // 6. Create a fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // 7. Select different drivers using a function passed as an argument
  const selectDifferentDrivers = function(arrayOfDrivers, selectionFunction) {
    return selectionFunction(arrayOfDrivers);
  };
  
  // Export all functions for testing
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
  