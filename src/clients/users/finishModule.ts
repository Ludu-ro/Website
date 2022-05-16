import axios from "axios";
import { Student } from "../../types";

async function finishModule(studentId: String | undefined, moduleId: String, token: String | null): Promise<Student> {
  const { data } = await axios.patch<Student>(
    `/api/students/${studentId}/courses/${moduleId}/finish`,{},
    {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    }
  );
  return data;
}

export default finishModule;
