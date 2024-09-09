

```markdown
# String Calculator

## Overview

The `StringCalculator` module provides functionality to calculate the sum of numbers provided in a string format. The numbers can be separated by commas, newlines, or custom delimiters. The module also handles edge cases such as empty strings and negative numbers.

## Features

- **Sum Calculation**: Calculates the sum of numbers in a string separated by commas or newlines.
- **Custom Delimiters**: Supports custom delimiters specified at the beginning of the string.
- **Error Handling**: Throws an error if negative numbers are found in the input string.

## Installation

To use the `StringCalculator` module, you need to have [Node.js](https://nodejs.org/en) installed. You can then include the module in your project by requiring it.

```bash
npm install
```

## Usage

### Importing the Module

```javascript
const StringCalculator = require('./StringCalculator');
```

### Methods

#### `add(numbers)`

Calculates the sum of a string of numbers separated by commas or newlines.

```javascript
/**
 * Calculates the sum of a string of numbers separated by commas or newlines.
 *
 * @param {string} numbers - a string of numbers separated by commas or newlines
 * @return {number} the sum of the numbers in the string
 */
```

**Example:**

```javascript
const calculator = new StringCalculator();
console.log(calculator.add("1,2,3")); // Outputs: 6
console.log(calculator.add("1\n2,3")); // Outputs: 6
console.log(calculator.add("")); // Outputs: 0
```

#### `addWithCustomDelimiter(numbers)`

Calculates the sum of a string of numbers with a custom delimiter.

```javascript
/**
 * Calculates the sum of a string of numbers with a custom delimiter.
 *
 * @param {string} numbers - a string of numbers with a custom delimiter
 * @return {number} the sum of the numbers in the string
 */
```

**Example:**

```javascript
const calculator = new StringCalculator();
console.log(calculator.addWithCustomDelimiter("//;\n1;2")); // Outputs: 3
```

### Error Handling

If the input string contains negative numbers, an error is thrown listing those numbers.

**Example:**

```javascript
try {
  console.log(calculator.add());
} catch (error) {
  console.error(error.message); 
}

# subtract
try {
  console.log(calculator.subtract());
} catch (error) {
  console.error(error.message); 
}
# multiply
try {
  console.log(calculator.multiply());
} catch (error) {
  console.error(error.message); 
}

# divide
try {
  console.log(calculator.divide());
} catch (error) {
  console.error(error.message);
} 
```

## TDD testing
The calculator.test.js file contains unit tests for the StringCalculator module. These tests ensure that the module functions correctly and handles edge cases as expected.

## Running the tests
To run the test, you need to have Jest installed. You can install it using npm:

`npm install --save-dev jest`

Then, you can run the tests using the following command:

`npm test`

## Test Cases
The calculator.test.js file includes the following test cases:

- An empty string should return 0.
- Single number Ensures that a single number returns its value.
- Multiple numbers ensures that multiple numbers are seperated by commas or newlines return their sum.
- Custom delimiters ensures that custom delimiters are supported and the sum is calculated correctly.
- Negative numbers ensures that negative numbers are not allowed and an error is thrown.

`
The calculator.test.js file includes the following test cases:
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
`


## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
```

This `README.md` file provides a comprehensive overview of the `StringCalculator` module, including its features, installation instructions, usage examples, and error handling.



        