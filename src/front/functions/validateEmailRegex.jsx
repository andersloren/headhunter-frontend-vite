export function validateEmailRegex(email) {
  /**
   * When the account enters an email in the input field, the value will be checked if it passes the regex criteria in this function.
   *
   * @function
   * @param {String} email - This is the value that the regex criteria checks.
   */
  const matcher = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
  return matcher.test(email);
}
