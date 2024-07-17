// Libraries, functions, etc
import axios from "axios";
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";

export async function deleteJob(jobId, handleJobCRUDSuccess) {
  const email = extractEmailFromToken();

  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/job/delete/${email}/${jobId}`;

  try {
    const response = await axios.delete(url, {
      data: {
        id: jobId,
        email: email,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Success: Delete Job");
    handleJobCRUDSuccess();
  } catch (error) {
    console.error("Error: Delete Job", error);
  }
}
