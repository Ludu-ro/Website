import axios from "axios";
import { User } from "../../types";

async function getDetails(
  id: string,
  type: "student" | "teacher"
): Promise<User> {
  const { data } = await axios.get<User>(`/api/${type}s/${id}`, {
    withCredentials: false,
    headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
  });
  return data;
}

export default getDetails;
