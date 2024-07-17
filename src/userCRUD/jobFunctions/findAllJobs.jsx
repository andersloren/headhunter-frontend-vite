import axios from "axios";

export async function findAllJobs() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/ad/findAllJob`;
  console.log(apiUrl);

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
      },
    });
    console.log("Success: Find All Ads");
  } catch (error) {
    console.log("Error: Find All Ads");
  }
}
