import axios from "axios";

export async function findAllAds() {
  const url = `http://localhost:8080/api/v1/ad/findAll`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
      },
    });
    console.log("Success: Find All Ads");
  } catch (error) {
    console.error("Error: Find All Ads");
  }
}
