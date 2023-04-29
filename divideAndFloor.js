function divideAndFloor(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both parameters must be numbers');
    }
    if (b === 0) {
      throw new Error('The second parameter cannot be 0');
    }
    if (arguments.length !== 2) {
      throw new Error('Both parameters must be provided');
    }
  
    const result = Math.floor(a / b);
    const remainder = a % b;
  
    return {
      result,
      remainder,
      dividesEvenly: remainder === 0,
    };
  }
  
  module.exports = divideAndFloor;
  