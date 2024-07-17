// Libraries, functions, etc.
import axios from "axios";

export async function getJobDtoById(
  jobId,
  setTitle,
  setDescription,
  setRecruiteName,
  setAdCompany,
  setAdEmail,
  setAdPhone,
  setApplicationDeadline
) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/ad/getJobDtoById/${jobId}`;
  console.log(apiUrl);

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Success: Get Job Dto");
    setTitle(response.data.data.title);
    setDescription(response.data.data.description);
    setRecruiteName(response.data.data.recruiterName);
    setAdCompany(response.data.data.adCompany);
    setAdEmail(response.data.data.adEmail);
    setAdPhone(response.data.data.adPhone);
    setApplicationDeadline(response.data.data.applicationDeadline);
  } catch (error) {
    console.error("Error: Get Job Dto", error);
  }
}
