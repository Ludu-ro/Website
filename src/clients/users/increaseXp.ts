import axios from "axios";
import { Student } from "../../types";

async function increaseXp(studentId: String | undefined, increaseAmount: number, token: String | null): Promise<Student> {
  const { data } = await axios.patch<Student>(
    `/api/students/${studentId}/xp/${increaseAmount}`,{},
    {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    }
  );
  return data;
}

export default increaseXp;
