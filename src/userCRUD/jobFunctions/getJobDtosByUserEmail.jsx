import axios from "axios";
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";

export async function getJobDtosByUserEmail() {
  const email = extractEmailFromToken;

  const url = `http://localhost/api/v1/job/getJobDtosByUserEmail/${email}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
      },
    });
    console.log("Success: Get Job Dtos");
  } catch (error) {
    console.log("Error: Get Job Dtos");
  }
}
