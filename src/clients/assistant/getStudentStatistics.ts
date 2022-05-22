import axios from "axios";

async function getStudentStatistics(userid: string | undefined, token: string | null): Promise<Array<string>> {
  
  const { data } = await axios.get(`/api/assistant/users/${userid}/stats?token=${token}`, {
    withCredentials: false,
  });
  return data;
}

export default getStudentStatistics;
