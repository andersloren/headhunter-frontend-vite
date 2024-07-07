// Libraries, functions, etc.
import axios from "axios";

export async function getNumberOfAdsByJobId(jobId) {
  const url = `http://localhost:8080/api/v1/ad/getNumberOfAdsByJobId/${jobId}`;

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
