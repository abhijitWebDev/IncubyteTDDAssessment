

const StringCalculator = require('./StringCalculator.js')

describe('StringCalculator', () => {
  it('should return 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('')).toBe(0);
  });

  it('should return 1 for a single number', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1')).toBe(1);
  });

  it('should return 6 for multiple numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,5')).toBe(6);
  });

  it('should return 6 for newlines as delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  it('should return 3 for a custom delimiter', () => {
    const calculator = new StringCalculator();
    expect(calculator.addWithCustomDelimiter('//;\n1;2')).toBe(3);
  });

  it('should throw an error for a negative number', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add('-1')).toThrowError('negative numbers not allowed -1');
  });

  it('should throw an error for multiple negative numbers', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add('-1,-2')).toThrowError('negative numbers not allowed -1,-2');
  });
});