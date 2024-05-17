// Libraries, functions, etc.
import { jwtDecode } from "jwt-decode";

/**
 * Extracts the JWT that is locally stored. From it, it looks up the time for when the session has been set to end, and compares it to current time to see if the session is still valid.
 *
 * @function
 * @return {boolean} isExpired - If the session ends later than current time, the user can continue using the app.
 */

export function extractExpiredFromToken() {
  /**
   * JwtDecode is a third-party-library that can extract the token from a JWT. The token is stored as "headhunter-token" in the browser.
   */
  const decodedToken = jwtDecode(localStorage.getItem("headhunter-token"));

  const tokenExpireTime = decodedToken.exp * 1000;

  /**
   * Checks if session ending time is larger than current time
   */
  const isExpired = tokenExpireTime > Date.now();

  return isExpired;
}
