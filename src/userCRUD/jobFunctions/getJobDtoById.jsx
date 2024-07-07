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
  const url = `http://localhost:8080/api/v1/job/getJobDtoById/${jobId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Get Job By Id Success");
    console.log("getJobById, response.data", response.data);
    setTitle(response.data.data.title);
    setDescription(response.data.data.description);
    setRecruiteName(response.data.data.recruiterName);
    setAdCompany(response.data.data.adCompany);
    setAdEmail(response.data.data.adEmail);
    setAdPhone(response.data.data.adPhone);
    setApplicationDeadline(response.data.data.applicationDeadline);
  } catch (error) {
    console.error("Error getting job by id", error);
  }
}
