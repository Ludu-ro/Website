import axios from "axios";
import { Course } from "../../types";

async function getCourse(courseId: String | undefined): Promise<Course> {
  const { data } = await axios.get<Array<Course>>(`/api/courses/` ,{
    withCredentials: false,
  });


  return data[0];
}

export default getCourse;
