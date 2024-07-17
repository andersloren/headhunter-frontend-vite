import axios from "axios";

export async function addAd(jobId, htmlCode, handleAdCRUDSuccess) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/ad/addAd/${jobId}`;
  console.log(apiUrl);

  try {
    const response = await axios.post(
      url,
      {
        htmlCode: htmlCode,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Save Ad Success");
    handleAdCRUDSuccess();
  } catch (error) {
    console.error("Error saving ad by jobId and htmlCode", error);
  }
}
