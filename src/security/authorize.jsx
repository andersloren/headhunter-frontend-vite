// Libraries, functions, etc.
import { extractExpiredFromToken } from "./token/extractExpiredFromToken";

/**
 * Checks so (1) there is a token, and (2) the token has not expired.
 *
 * @function
 * @return {boolean} isAuthorized - True if there is a token and it has not expired, otherwise false.
 */

export function authorize() {
  /**
   * The token is stored as "headhunter-token" in the browser.
   */
  const storedToken = localStorage.getItem("headhunter-token");

  let isAuthorized = false;

  /**
   * If no token was found in the browser, storedToken will take on the value as null.
   *
   * extractedExpiredFromToken checks the expiration validity of the token.
   */
  if (storedToken != null && extractExpiredFromToken()) {
    return (isAuthorized = true);
  }
  return isAuthorized;
}
