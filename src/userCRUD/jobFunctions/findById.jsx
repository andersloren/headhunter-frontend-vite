import axios from "axios";

export async function findById(jobId) {
  const url = `http://localhost:8080/api/v1/job/findById/${jobId}`;

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
