const divideAndFloor = require('./divideAndFloor');

describe('divideAndFloor', () => {
  it('should return the correct result when the division is even', () => {
    expect(divideAndFloor(10, 2)).toEqual({ result: 5, remainder: 0, dividesEvenly: true });
  });

  it('should return the correct result when the division is not even', () => {
    expect(divideAndFloor(10, 3)).toEqual({ result: 3, remainder: 1, dividesEvenly: false });
  });

  it('should throw an error if either parameter is not a number', () => {
    expect(() => divideAndFloor('not a number', 2)).toThrowError('Both parameters must be numbers');
    expect(() => divideAndFloor(10, 'not a number')).toThrowError('Both parameters must be numbers');
  });

  it('should throw an error if the second parameter is 0', () => {
    expect(() => divideAndFloor(10, 0)).toThrowError('The second parameter cannot be 0');
  });

  it('should throw an error if either parameter is not provided', () => {
    expect(() => divideAndFloor(10)).toThrowError('Both parameters must be provided');
    expect(() => divideAndFloor()).toThrowError('Both parameters must be provided');
  });
});
