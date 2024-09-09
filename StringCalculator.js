    /**
     * Calculates the sum of a string of numbers separated by commas or newlines.
     *
     * @param {string} numbers - a string of numbers separated by commas or newlines
     * @return {number} the sum of the numbers in the string
     */


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
    
  }

  module.exports = StringCalculator;