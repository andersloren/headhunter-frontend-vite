import axios from "axios";

export async function getAccountDtoByAdId(adId) {
  const url = `http://localhost/api/v1/ad/getAccountDtoByAdId/${adId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
      },
    });
    console.log("Success: Get Account Dto");
  } catch (error) {
    console.log("Error: Get Account Dto");
  }
}
