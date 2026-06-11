/**
 * Math Utilities
 * Basic mathematical operations for learning JavaScript functions
 */

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a+b;
}

/**
 * Subtracts b from a
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a-b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  if (a===0){
    throw new Error("Multiplication by zero is not allowed");
  }
  /*else{
    return a*b;
  }*/
  return a*b;
}

/**
 * Divides a by b
 * @param {number} a - Numerator
 * @param {number} b - Denominator
 * @returns {number} Quotient of a and b
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  } 
  /*else {
    return a/b;
  }*/
  return a/b;
}

/**
 * Raises base to the power of exponent
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} Base raised to the power of exponent
 */
function power(base, exponent) {
  return Math.pow(base,exponent);
}

// Export all functions
export { add, subtract, multiply, divide, power };
