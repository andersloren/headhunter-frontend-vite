// Libraries, functions, etc.
import axios from "axios";
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";

export async function getJobsTitleAndId(setJobList) {
  const email = extractEmailFromToken();

  const url = `http://localhost:8080/api/v1/job/getAllJobIdAndTitlesDtosByEmail/${email}`;

  console.log("getJobsTitleAndId is loading");

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
