import axios from "axios";
import { User } from "../../types";
import { Register } from "../../types/request";

async function register(
  request: Register,
  type: "student" | "teacher"
): Promise<User> {
  const { data } = await axios.post<User>(`/api/${type}s`, {
    ...request,
  });
  return data;
}

export default register;
