import axios from "axios";

export async function getAccountDtoByEmail(email, setRoles, setNumberOfJobs) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/account/getAccountDtoByEmail/${email}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Success: Get Account Dto");
    setRoles(response.data.data.roles);
    setNumberOfJobs(response.data.data.number_of_jobs);
  } catch (error) {
    console.error("Error: Get Account Dto", error);
  }
}
