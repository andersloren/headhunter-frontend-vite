import axios from "axios";

export async function getUserInfo(email, setName, setOrganization) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/userInfo/getUserInfo/${email}`;
  console.log(apiUrl);

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Success: User Info");
    setName(response.data.data.name);
    setOrganization(response.data.data.organization);
  } catch (error) {
    console.error("Error: User Info", error);
  }
}
