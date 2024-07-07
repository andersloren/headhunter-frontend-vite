import axios from "axios";

export async function getAdDtosByJobId(jobId) {
  const url = `http://localhost:8080/api/v1/ad/getAdDtosByJobId/${jobId}`;

  try {
    const response = await axios.getAdDtoByJobId(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Success: Get Ad Dtos");
  } catch (error) {
    console.error("Error: Get Ad Dtos");
  }
}
