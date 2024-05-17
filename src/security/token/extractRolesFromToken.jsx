// Libraries, functions, etc.
import { jwtDecode } from "jwt-decode";

/**
 * Extracts the user's roles from the JWT stored locally in the browser.
 *
 * @function
 * @return {array} rolesArr - The roles that the user has.
 */

export function extractRolesFromToken() {
  /**
   * JwtDecode is a third-party-library that can extract the token from a JWT. The token is stored as "headhunter-token" in the browser.
   */
  const decodedToken = jwtDecode(localStorage.getItem("headhunter-token"));

  const roles = decodedToken.roles;

  /**
   * Tokens should be delimited by one space symbol.
   */
  const prexifedRolesArr = roles.split(" ");

  const rolesArr = prexifedRolesArr.map((role) => {
    const indexOfUnderscore = role.indexOf("_");
    /**
     * The roles have a prefix ending with an underscore that should be removed.
     *
     * Example: ROLE_admin => admin
     *
     * IndexOf returns the position of the underscore, so +1 puts the split where it should be.
     * */
    return role.slice(indexOfUnderscore + 1);
  });

  return rolesArr;
}
