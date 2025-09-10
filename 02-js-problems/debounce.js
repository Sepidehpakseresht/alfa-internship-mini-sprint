/**
 * debounce: اجرای تابع پس از مکث مشخص
 * @param {(…args:any[])=>any} fn
 * @param {number} delay
 * @returns {Function}
 */
function debounce(fn, delay=300){
  let t = null;
  return function(...args){
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), delay);
  }
}
module.exports = debounce;
