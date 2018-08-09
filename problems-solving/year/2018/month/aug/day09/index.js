/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo_I = n => {
  if (n < 1) {
    return false;
  }

  while (n % 2 === 0) {
    n = Math.floor(n / 2);
  }

  return n === 1;
};

// isPowerOfTwo_I(2)
// true
// isPowerOfTwo_I(3)
// false
// isPowerOfTwo_I(64)
// true
