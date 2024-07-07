// Libraries, functions, etc.
import axios from "axios";

export async function updateJob(
  jobId,
  handleJobCRUDSuccess,
  title,
  description,
  instruction,
  recruiterName,
  adCompany,
  adEmail,
  adPhone,
  applicationDeadline
) {
  const url = `http://localhost:8080/api/v1/job/update/${jobId}`;
  try {
    const response = await axios.put(
      url,
      {
        title: title,
        description: description,
        instruction: instruction,
        recruiterName: recruiterName,
        adCompany: adCompany,
        adEmail: adEmail,
        adPhone: adPhone,
        applicationDeadline: applicationDeadline,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Succes: Update Job");
    handleJobCRUDSuccess();
  } catch (error) {
    console.error("Error: Update Job", error);
  }
}
