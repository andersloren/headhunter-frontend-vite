// Libraries, functions, etc
import axios from "axios";

export async function deleteAd(adId, handleAdCRUDSuccess) {
  const url = `http://localhost:8080/api/v1/ad/delete/${adId}`;

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
