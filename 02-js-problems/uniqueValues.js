/**
 * یکتا کردن مقادیر آرایه (حفظ ترتیب)
 * @param {any[]} arr
 * @returns {any[]}
 */
function uniqueValues(arr){
  if(!Array.isArray(arr)) throw new TypeError("arr must be an array");
  const seen = new Set();
  const out = [];
  for(const v of arr){
    if(!seen.has(v)){
      seen.add(v);
      out.push(v);
    }
  }
  return out;
}
module.exports = uniqueValues;
