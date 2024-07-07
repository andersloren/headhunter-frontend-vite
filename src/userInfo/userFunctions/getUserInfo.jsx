import axios from "axios";

export async function getUserInfo(email, setName, setOrganization) {
  const url = `http://localhost:8080/api/v1/userInfo/getUserInfo/${email}`;

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
