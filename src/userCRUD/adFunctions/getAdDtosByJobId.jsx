import axios from "axios";

export async function getAdDtosByJobId(jobId, setAdList) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/ad/getAdDtosByJobId/${adId}`;
  console.log(apiUrl);

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
