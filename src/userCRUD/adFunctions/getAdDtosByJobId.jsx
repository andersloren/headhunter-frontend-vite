import axios from "axios";

export async function getAdDtosByJobId(jobId, setAdList) {
  const url = `http://localhost:8080/api/v1/ad/getAdDtosByJobId/${jobId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Success: Get Ad Dtos");
    setAdList(response.data.data);
  } catch (error) {
    console.error("Error: Get Ad Dtos");
  }
}
