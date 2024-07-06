import axios from "axios";

export async function findAdById(jobId) {
  const url = `http://localhost:8080/api/v1/findById/${jobId}`;

  try {
    const response = await axios.findAdById(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Success: Find Ad");
  } catch (error) {
    console.error("Error: Find Ad", error);
  }
}
