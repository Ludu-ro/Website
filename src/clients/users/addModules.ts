import axios from "axios";
import { Student } from "../../types";

async function addModules(studentId: String | undefined, moduleIds: Array<String>, token: String | null): Promise<Student> {
  const { data } = await axios.patch<Student>(
    `/api/students/${studentId}/courses`, moduleIds,
    {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    }
  );
  return data;
}

export default addModules;
