class StringCalculator {
  add(numbers) {
    if (numbers === '') {
      return 0;
    }

    const parts = numbers.split(/,|\n/);
    let sum = 0;
    let negativeNumbers = '';

    for (const part of parts) {
      const number = parseInt(part);
      if (number < 0) {
        negativeNumbers += `${number},`;
      } else {
        sum += number;
      }
    }

    if (negativeNumbers) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.slice(0, -1)}`);
    }

    return sum;
  }

  subtract(numbers) {
    if (numbers === '') {
      return 0;
    }

    const parts = numbers.split(/,|\n/);
    let result = parseInt(parts[0]) || 0; // Start with the first number
    let negativeNumbers = '';

    for (let i = 1; i < parts.length; i++) {
      const number = parseInt(parts[i]);
      if (number < 0) {
        negativeNumbers += `${number},`;
      } else {
        result -= number;
      }
    }

    if (negativeNumbers) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.slice(0, -1)}`);
    }

    return result;
  }

  multiply(numbers) {
    if (numbers === '') {
      return 0;
    }

    const parts = numbers.split(/,|\n/);
    let result = 1;
    let negativeNumbers = '';

    for (const part of parts) {
      const number = parseInt(part);
      if (number < 0) {
        negativeNumbers += `${number},`;
      } else {
        result *= number;
      }
    }

    if (negativeNumbers) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.slice(0, -1)}`);
    }

    return result;
  }

  divide(numbers) {
    if (numbers === '') {
      return 0;
    }

    const parts = numbers.split(/,|\n/);
    let result = parseInt(parts[0]) || 1; // Start with the first number
    let negativeNumbers = '';

    for (let i = 1; i < parts.length; i++) {
      const number = parseInt(parts[i]);
      if (number < 0) {
        negativeNumbers += `${number},`;
      } else {
        result /= number;
      }
    }

    if (negativeNumbers) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.slice(0, -1)}`);
    }

    return result;
  }

  addWithCustomDelimiter(numbers) {
    if (numbers.startsWith('//')) {
      const delimiterIndex = numbers.indexOf('\n');
      const delimiter = numbers.slice(2, delimiterIndex);
      const parts = numbers.slice(delimiterIndex + 1).split(delimiter);
      return this.add(parts.join(','));
    } else {
      return this.add(numbers);
    }
  }

  subtractWithCustomDelimiter(numbers) {
    if (numbers.startsWith('//')) {
      const delimiterIndex = numbers.indexOf('\n');
      const delimiter = numbers.slice(2, delimiterIndex);
      const parts = numbers.slice(delimiterIndex + 1).split(delimiter);
      return this.subtract(parts.join(','));
    } else {
      return this.subtract(numbers);
    }
  }

  multiplyWithCustomDelimiter(numbers) {
    if (numbers.startsWith('//')) {
      const delimiterIndex = numbers.indexOf('\n');
      const delimiter = numbers.slice(2, delimiterIndex);
      const parts = numbers.slice(delimiterIndex + 1).split(delimiter);
      return this.multiply(parts.join(','));
    } else {
      return this.multiply(numbers);
    }
  }

  divideWithCustomDelimiter(numbers) {
    if (numbers.startsWith('//')) {
      const delimiterIndex = numbers.indexOf('\n');
      const delimiter = numbers.slice(2, delimiterIndex);
      const parts = numbers.slice(delimiterIndex + 1).split(delimiter);
      return this.divide(parts.join(','));
    } else {
      return this.divide(numbers);
    }
  }
}

module.exports = StringCalculator;
