/**
 * تبدیل رشته به Title Case
 * @param {string} s
 * @returns {string}
 */
function toTitleCase(s){
  return String(s || "").toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}
module.exports = toTitleCase;
