/**
 * جمع عناصر عددی آرایه
 * @param {number[]} arr
 * @returns {number}
 */
function sumArray(arr){
  if(!Array.isArray(arr)) throw new TypeError("arr must be an array");
  return arr.reduce((s, n) => s + Number(n || 0), 0);
}
module.exports = sumArray;
