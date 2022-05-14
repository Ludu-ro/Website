import axios from "axios";
import { Course } from "../../types";

async function uploadFile(file : File): Promise<String> {
  const { data } = await axios.put<String>(
      `/api/slides/upload`, 
    {
        ...file,
    },
    {
        withCredentials: false,
    }
  );
  return data;
}

export default uploadFile;
