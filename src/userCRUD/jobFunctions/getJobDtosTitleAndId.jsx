// Libraries, functions, etc.
import axios from "axios";
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";

export async function getJobDtosTitleAndId(setJobList) {
  const email = extractEmailFromToken();

  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/ad/getJobIdAndTitlesDtosByEmail/${email}`;
  console.log(apiUrl);

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    setJobList(response.data.data);
    console.log("getJobsTitleAndId is working");
  } catch (error) {
    console.error("Error get all Jobs", error);
  }
}
