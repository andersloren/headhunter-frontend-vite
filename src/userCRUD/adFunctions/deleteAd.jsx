// Libraries, functions, etc
import axios from "axios";

export async function deleteAd(adId, handleAdCRUDSuccess) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/ad/delete/${adId}`;

  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Success: Delete Ad");
    handleAdCRUDSuccess();
  } catch (error) {
    console.error("Error: Delete Ad", error);
  }
}
