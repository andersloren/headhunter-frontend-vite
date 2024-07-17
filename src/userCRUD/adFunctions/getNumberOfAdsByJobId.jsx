// Libraries, functions, etc.
import axios from "axios";

export async function getNumberOfAdsByJobId(jobId) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/ad/getNumberOfAdsByJobId/${jobId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Success: Get Number of Ads");
    return response.data.data;
  } catch (error) {
    console.error("Error: Get Number of Ads", error);
  }
}
