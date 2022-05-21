import { Badge, Box, Text, Image, Icon } from "@chakra-ui/react";
import { Course } from "../../types/Course";
import { CourseDetailsLine, Stars } from "../blocks";
import { useNavigate } from "react-router-dom";
import { BiTime } from 'react-icons/bi'
import {IoMdPeople} from 'react-icons/io'
import {GiPapers} from 'react-icons/gi'

interface CourseDetailsInterface {
    course: Course;
  }

function CourseBasicDetailsCard({ course }: CourseDetailsInterface) {

  const navigate = useNavigate();
  const courseId = course.courseId;

  return (
    <Box  boxShadow='dark-lg' p='6' rounded='md' bg='white' 
    gap="10"  color="font-primary" cursor="pointer"  alignSelf="flex-start" alignContent="flex-start">

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          fontSize="larger"
          lineHeight="tight"
        >
          Detalii Curs
        </Box>

        <Box  display="flex" alignItems="center" justifyContent="space-around" rowGap="3">
          <Stars rating={course.rating || 1} />
          {course.reviews} reviews
          <Box flex="1" />
        </Box>
        
        <CourseDetailsLine icon={<Icon alignSelf="center" color="primary-dark" w={7} h={7} as={BiTime}/>} value={course.duration} field={"Durata cursului:  "}></CourseDetailsLine>

        <CourseDetailsLine icon={<Icon alignSelf="center" color="primary-dark" w={7} h={7}as={IoMdPeople}/>} value={course.numberOfAttendees} field={"Numar cursanti:"}></CourseDetailsLine>

        <CourseDetailsLine icon={<Icon alignSelf="center" color="primary-dark" w={7} h={7} as={GiPapers}/>} value={course.modules.length} field={" Numar de module:"}></CourseDetailsLine>
      
        <Badge marginTop = "5" p="1" bg="tertiary">
          {course.modules.map(m => m.xpValue).reduce((acc, current) => acc + current)} xp
        </Badge>
          
    </Box>
  );
}

export default CourseBasicDetailsCard;
