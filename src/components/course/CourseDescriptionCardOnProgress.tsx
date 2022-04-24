import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Icon } from "@chakra-ui/react";
import { RiFilePaper2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Course } from "../../types/Course";
import { AcceptButton, ActionButton, DeleteButton } from "../blocks";
import CourseDescription from "./CourseDescription";


interface CourseDetailsInterface {
    course: Course;
  }

function CourseDescriptionCardOnProgress({ course }: CourseDetailsInterface) {

  const navigate = useNavigate();
  
  return (
    <Box alignContent="center" alignItems="center" p = "5" rowGap="6" justifyContent="space-around">
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

    <Box p = "5" textAlign="center" flexDirection="row" >
        
      <AcceptButton width="sm" onClick={() => navigate("/login")}>
        Continua cursul
      </AcceptButton>

    </Box>

    <Box p = "5" textAlign="center" flexDirection="row" >

      <DeleteButton width="lm" onClick={() => navigate("/login")}>
        Inceteaza progresul
      </DeleteButton>
    </Box>

    </Box>
  );
}

export default CourseDescriptionCardOnProgress;
