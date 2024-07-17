import axios from "axios";

export async function updateUserInfo(email, name, organization) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${apiUrl}/api/v1/userInfo/updateUserInfo/${email}`;
  console.log(apiUrl);

  try {
    const response = await axios.put(
      url,
      {
        name: name,
        organization: organization,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Update UserInfo Successful");
  } catch (error) {
    console.error("Error updating userInfo by email", error);
  }
}
