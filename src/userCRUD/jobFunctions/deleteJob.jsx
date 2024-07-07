// Libraries, functions, etc
import axios from "axios";
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";

export async function deleteJob(jobId, handleJobCRUDSuccess) {
  const email = extractEmailFromToken();

  const url = `http://localhost:8080/api/v1/job/delete/${email}/${jobId}`;

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
