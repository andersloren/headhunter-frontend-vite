// Libraries, functions, etc.
import axios from "axios";
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";

export async function getJobCardDtosByUserEmail(setJobList) {
  const email = extractEmailFromToken();

  const url = `http://localhost:8080/api/v1/job/getJobCardDtosByUserEmail/${email}`;

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
