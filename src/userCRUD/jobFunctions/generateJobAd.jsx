// Libraries, functions, etc.
import axios from "axios";

export async function generateJobAd(
  jobId,
  handleAdCRUDSuccess,
  setIsGenerating
) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/ad/generate/${jobId}`;
  console.log(apiUrl);

  console.log("Communication with OpenAI API initialized, for job ", jobId);

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Success: Generate Ad");
    handleAdCRUDSuccess();
    setIsGenerating(false);
  } catch (error) {
    console.error("Error: Generate Ad", error);
    setIsGenerating(false);
  }
}
