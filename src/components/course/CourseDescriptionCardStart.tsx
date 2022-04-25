import { Badge, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, Button, ModalBody, ModalFooter } from "@chakra-ui/react";
import { useContext } from "react";
import { RiFilePaper2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../hooks";
import { Course } from "../../types/Course";
import { ActionButton, LoginBox } from "../blocks";
import CourseDescription from "./CourseDescription";


interface CourseDetailsInterface {
    course: Course;
  }



function CourseDescriptionCardOnProgress({ course }: CourseDetailsInterface) {

  const navigate = useNavigate();

  const { user, dispatch } = useContext(UserContext);

  const { isOpen, onOpen, onClose } = useDisclosure()

  function handleStartCourse() {
    
    if(!user){

       onOpen()
    }

  }
  
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
      <ActionButton width="sm" onClick={handleStartCourse}>
        Incepe
      </ActionButton>
    </Box>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
          
          <LoginBox></LoginBox>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
        
    </Modal>

    </Box>
  );
}

export default CourseDescriptionCardOnProgress;


