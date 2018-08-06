/**
 * @param {string[]} string
 * @return {boolean}
 */

export const isPalindrome = string => {
  const validChars = 'abcdefghijklmnopqrstuvwxyz'

  const stringArr = string
    .toLowerCase()
    .split('')
    .filter(char => validChars.indexOf(char) !== -1)

  return stringArr.join('') === stringArr.reverse().join('')
}

isPalindrome("abc");
isPalindrome("a but tuba");
