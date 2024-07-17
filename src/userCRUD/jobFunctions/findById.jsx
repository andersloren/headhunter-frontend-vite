import axios from "axios";

export async function findById(jobId) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/ad/findById/${jobId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
      },
    });
    console.log("Success: Find Job By Id");
  } catch (error) {
    console.log("Error: Find Job By Id");
  }
}
