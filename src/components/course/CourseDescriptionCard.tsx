
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CourseDescriptionCardStart } from ".";
import { Course } from "../../types/Course";
import CourseDescriptionCardOnProgress from "./CourseDescriptionCardOnProgress";


interface CourseDetailsInterface {
    course: Course;
  }

function CourseDescriptionCard({ course }: CourseDetailsInterface) {
  
  return (
    <Box marginBottom="10" alignItems="center" boxShadow='dark-lg' p='6' rounded='md' bg='white'  color="font-primary" cursor="pointer" w="70%">
      <CourseDescriptionCardStart course={course}/>
    </Box>
  );
}

export default CourseDescriptionCard;
