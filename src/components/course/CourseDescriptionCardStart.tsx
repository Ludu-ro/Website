import { Badge, Box, Text, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Icon } from "@chakra-ui/react";
import { RiFilePaper2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Course } from "../../types/Course";
import { ActionButton, InfoButton, Stars } from "../blocks";
import CourseDescription from "./CourseDescription";


interface CourseDetailsInterface {
    course: Course;
  }

function CourseDescriptionCardOnProgress({ course }: CourseDetailsInterface) {

  const navigate = useNavigate();
  
  return (
    <Box>
        <CourseDescription course={course}></CourseDescription>
        <Accordion textStyle='semibold' paddingBottom="10">
          {course.modules?.map((module) => (
            <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "primary-dark", color: 'white' }}>
                <Box flex='1' textAlign='left' >
                  {module.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
             <Icon as={RiFilePaper2Fill}></Icon> {module.description}
            </AccordionPanel>
          </AccordionItem>
          ))}
              
    </Accordion>

    <Box alignItems="center" w="100%" justifyItems="center" textAlign="center">
      <ActionButton width="sm" onClick={() => navigate("/login")}>
        Incepe
      </ActionButton>
    </Box>
    </Box>
  );
}

export default CourseDescriptionCardOnProgress;
