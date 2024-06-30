export function validatePasswordRegex(password) {
  /**
   * When the account enters a password in the input field, the value will be checked if it passes the regex criteria in this function.
   *
   * @function
   * @param {String} password - This is the value that the regex criteria checks.
   */

  const matcher = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return matcher.test(password);
}
