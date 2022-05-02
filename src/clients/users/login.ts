import axios from "axios";
import { Login } from "../../types/request";

async function login(request: Login): Promise<string> {
  const { data } = await axios.post<{ token: string }>(
    `/api/login`,
    {
      ...request,
    },
    {
      withCredentials: false,
    }
  );
  return data.token;
}

export default login;
