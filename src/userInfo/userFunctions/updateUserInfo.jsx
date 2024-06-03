import axios from "axios";

export async function updateUserInfo(email, name, organization) {
  const url = `http://localhost:8080/api/v1/userInfo/updateUserInfo/${email}`;

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
