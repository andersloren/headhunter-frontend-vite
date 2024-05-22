// Libraries, functions, etc.
import { jwtDecode } from "jwt-decode";

/**
 * Extracts the user's email from the JWT stored locally in the browser.
 *
 * @function
 * @return {String} email of the user.
 */

export function extractEmailFromToken() {
  /**
   * JwtDecode is a third-party-library that can extract the token from a JWT. The token is stored as "headhunter-token" in the browser.
   */
  const decodedToken = jwtDecode(localStorage.getItem("headhunter-token"));

  const email = decodedToken.sub;

  return email;
}
