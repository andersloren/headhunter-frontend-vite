// Libraries, functions, etc.
import axios from "axios";

export async function getNumberOfAds(jobId, setNumberOfAds) {
  const url = `http://localhost:8080/api/v1/ads/getNumberOfAds/${jobId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Get Number of Ads Success");
    console.log("response.data.data", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error getting number of ads", error);
  }
}
