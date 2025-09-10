/**
 * اعتبارسنجی ساده ایمیل
 * @param {string} email
 * @returns {boolean}
 */
function validateEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}
module.exports = validateEmail;
