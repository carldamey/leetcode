/**
 * @param {string} s
 * @return {number}
 */
const characterValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function romanToInt(romanNumber) {
  let result = 0
  const numArr = [...romanNumber]
  numArr.forEach((char, idx) => {
    console.log(numArr.length - 1)
    if (characterValues[char] < characterValues[numArr[idx + 1]] && idx < numArr.length - 1) result -= characterValues[char]
    
    else result += characterValues[char]
  })
  return result
}