import axios from "axios";

export async function getUserByEmail(
  email,
  setUsername,
  setRoles,
  setNumberOfJobs
) {
  const url = `http://localhost:8080/api/v1/users/getUserByEmail/${email}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("User Found Success");
    setUsername(response.data.data.username);
    setRoles(response.data.data.roles);
    setNumberOfJobs(response.data.data.number_of_jobs);
  } catch (error) {
    console.error("Error get user by email", error);
  }
}
