import axios from "axios";
import { Student } from "../../types";

async function startCourse(userId: String | undefined, courseId: String, token: String | null): Promise<Student> {
  const { data } = await axios.patch<Student>(
    `/api/users/${userId}/groups`, [courseId],
    {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    }
  );
  return data;
}

export default startCourse;
