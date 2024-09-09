


const StringCalculator = require('./StringCalculator.js');

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

  // Subtract tests
  it('should return 0 for an empty string in subtract', () => {
    const calculator = new StringCalculator();
    expect(calculator.subtract('')).toBe(0);
  });

  it('should return 1 for a single number in subtract', () => {
    const calculator = new StringCalculator();
    expect(calculator.subtract('1')).toBe(1);
  });

  it('should return -4 for multiple numbers in subtract', () => {
    const calculator = new StringCalculator();
    expect(calculator.subtract('1,5')).toBe(-4);
  });

  it('should return -4 for newlines as delimiters in subtract', () => {
    const calculator = new StringCalculator();
    expect(calculator.subtract('1\n2,3')).toBe(-4);
  });

  // Multiply tests
  it('should return 0 for an empty string in multiply', () => {
    const calculator = new StringCalculator();
    expect(calculator.multiply('')).toBe(0);
  });

  it('should return 1 for a single number in multiply', () => {
    const calculator = new StringCalculator();
    expect(calculator.multiply('1')).toBe(1);
  });

  it('should return 5 for multiple numbers in multiply', () => {
    const calculator = new StringCalculator();
    expect(calculator.multiply('1,5')).toBe(5);
  });

  it('should return 6 for newlines as delimiters in multiply', () => {
    const calculator = new StringCalculator();
    expect(calculator.multiply('1\n2,3')).toBe(6);
  });

  // Divide tests
  it('should return 0 for an empty string in divide', () => {
    const calculator = new StringCalculator();
    expect(calculator.divide('')).toBe(0);
  });

  it('should return 1 for a single number in divide', () => {
    const calculator = new StringCalculator();
    expect(calculator.divide('1')).toBe(1);
  });

  it('should return 0.2 for multiple numbers in divide', () => {
    const calculator = new StringCalculator();
    expect(calculator.divide('1,5')).toBe(0.2);
  });

  it('should return 0.16666666666666666 for newlines as delimiters in divide', () => {
    const calculator = new StringCalculator();
    expect(calculator.divide('1\n2,3')).toBe(0.16666666666666666);
  });
});

