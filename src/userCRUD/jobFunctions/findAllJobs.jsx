import axios from "axios";

export async function findAllJobs() {
  const url = `http://localhost:8080/api/v1/job/findAllJob`;

  try {
    const response = await axios.findAllJobs(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
      },
    });
    console.log("Success: Find All Ads");
  } catch (error) {
    console.log("Error: Find All Ads");
  }
}
