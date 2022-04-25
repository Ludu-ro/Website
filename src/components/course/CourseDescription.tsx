import { Badge, Box, Text, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Icon } from "@chakra-ui/react";
import { RiFilePaper2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Course } from "../../types/Course";
import { ActionButton, InfoButton, Stars } from "../blocks";


interface CourseDetailsInterface {
    course: Course;
  }

function CourseDescription({ course }: CourseDetailsInterface) {

  
  return (
    <Box >
      <Image
        w="100%"
        h="300"
        objectFit="cover"
        src={course.image}
        alt={course.title}
      />
      <Box display="flex" flexDirection="column" gap="2" p="4">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h1"
          fontSize="xxx-large"
          lineHeight="tight"
          textAlign="left"
          isTruncated
          textColor="primary-dark"
        >
          {course.title}
        </Box>

        <Box display="flex" alignItems="baseline" gap="4" >
          {course.tags?.map((tag) => (
            <Badge  h="lm" w="lm" key={tag} color="font-secondary" bg="primary-dark">
              {tag}
            </Badge>
          ))}
        </Box>

        <Text isTruncated>{course.description}</Text>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h1"
          fontSize="xx-large"
          lineHeight="tight"
          textAlign="left"
          isTruncated
          textColor="primary-dark"
        >
          Cuprins
        </Box>

        
      </Box>
    </Box>
  );
}

export default CourseDescription;
