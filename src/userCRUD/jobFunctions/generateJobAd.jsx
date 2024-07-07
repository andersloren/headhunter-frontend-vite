// Libraries, functions, etc.
import axios from "axios";

export async function generateJobAd(
  jobId,
  handleAdCRUDSuccess,
  setIsGenerating
) {
  const url = `http://localhost:8080/api/v1/job/generate/${jobId}`;

  console.log("Communication with OpenAI API initialized");

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
