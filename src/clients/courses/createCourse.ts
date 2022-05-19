import axios from "axios";
import { Course } from "../../types";
import { CourseInput } from "../../types/CourseInput";

async function createCourse(request: CourseInput): Promise<Course> {

  console.log(request)
  const { data } = await axios.post<Course>(
    `/api/courses`,
    {
      ...request,
    },
    {
      withCredentials: false,
    }
  );
  console.log(data)
  return data;
}

export default createCourse;
