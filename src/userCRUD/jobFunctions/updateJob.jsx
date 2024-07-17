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
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/ad/update/${jobId}`;

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
