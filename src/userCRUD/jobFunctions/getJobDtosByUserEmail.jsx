import axios from "axios";
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";

export async function getJobDtosByEmail() {
  const email = extractEmailFromToken;

  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/job/getJobDtosByEmail/${email}`;

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
