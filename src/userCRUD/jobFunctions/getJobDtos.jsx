// Libraries, functions, etc.
import axios from "axios";

export async function getJobDtos() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/job/getJobDtos`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Success: Get Job Dtos");
  } catch (error) {
    console.error("Error: Get Job Dtos", error);
  }
}
