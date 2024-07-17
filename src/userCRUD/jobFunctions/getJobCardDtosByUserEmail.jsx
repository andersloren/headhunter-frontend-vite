// Libraries, functions, etc.
import axios from "axios";
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";

export async function getJobCardDtosByUserEmail(setJobList) {
  const email = extractEmailFromToken();

  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/ad/getJobCardDtosByUserEmail/${email}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    setJobList(response.data.data);
    console.log("Success: Get Job Card Dtos");
  } catch (error) {
    console.error("Error: Get Job Card Dtos", error);
  }
}
