import {
  Flex,
  Box,
} from "@chakra-ui/react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import CourseDetails from "../constructed/CourseDetails";

function Course() {

  const { id } = useParams();

  return (
    <Flex
      pt="16"
      gap="5"
      bg="primary-dark"
      color="font-secondary"
      justifyContent="space-around"
    >
        <CourseDetails courseId={id}/>


    </Flex>
  );
}

export default Course;
