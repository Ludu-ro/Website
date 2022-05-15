import { Image, Badge, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, Button, ModalBody, ModalFooter } from "@chakra-ui/react";
import { useContext } from "react";
import { RiFilePaper2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { UserContext, UserActionType } from "../../hooks";
import { Course } from "../../types/Course";
import { ActionButton, LoginBox } from "../blocks";
import CourseDescription from "./CourseDescription";
import CongratsImage from '../../assets/congratulation.png'
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { startModule, startCourse, addModules } from "../../clients";
import { CheckCircleIcon, SpinnerIcon } from '@chakra-ui/icons'
import { ModuleStatus, Status, Module } from "../../types";
import { m } from "framer-motion";


interface CourseDetailsInterface {
    course: Course;
  }



function CourseDescriptionCardOnProgress({ course }: CourseDetailsInterface) {

  const navigate = useNavigate();

  const { user, dispatch } = useContext(UserContext);

  const { isOpen: loginIsOpen, onOpen: loginonOpen, onClose: loginOnClose } = useDisclosure()
  const { isOpen: congratsIsOpen, onOpen: congratsOnOpen, onClose: congratsOnClose } = useDisclosure()

  function handleStartCourse() {
    
    if(!user){

       loginonOpen()
    }
    else{

      congratsOnOpen()
    }
  }

  function startCourseHandler() {
    congratsOnClose()
    const modulesIds = course.modules.map(module => module.moduleId);
    startCourse(user?.id, course.courseId, localStorage.getItem("jwt"));
    addModules(user?.id, modulesIds, localStorage.getItem("jwt"));

    const moduleStatuses : ModuleStatus[] = course.modules.map(module => { 
        const m: ModuleStatus = {
        id: module.moduleId,
        status: Status.NotStarted
      };
        return m;
    });
    // courses are not added..............
    user?.courses?.concat(moduleStatuses);
    dispatch({
      type: UserActionType.SetUser,
      user,
    });
    console.log(user?.courses)
    user?.groups?.push(course.courseId);
    dispatch({
      type: UserActionType.SetUser,
      user,
    });
    console.log(course)
  }

  function showProgressIcon(module: Module){
    var m: ModuleStatus | undefined = user?.courses?.find((m: ModuleStatus) => m.id === module.moduleId)
    if (m) {
      if(m.status.toString() === Status[Status.Finished].toLowerCase())
        return <CheckCircleIcon color="green"></CheckCircleIcon>
      else if (m.status.toString() === Status[Status.Started].toLowerCase())
        return <SpinnerIcon color="orange"></SpinnerIcon>
    } else {
      return "Module Not Found";
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
                {showProgressIcon(module)}
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
        {user?.groups?.indexOf(course.courseId) === -1 ? "Incepem" : "Te-ai inscris!"}
      </ActionButton>
    </Box>

    <Modal isOpen={loginIsOpen} onClose={loginOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
          
          <LoginBox closeMethod = {loginOnClose}></LoginBox>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={loginOnClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
        
    </Modal>

    <Modal isOpen={loginIsOpen} onClose={loginOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
          
          <LoginBox closeMethod = {loginOnClose}></LoginBox>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={loginOnClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
        
    </Modal>
    
    <Modal isOpen={congratsIsOpen} onClose={congratsOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody alignSelf="center">

          <Image marginInline="auto" src={CongratsImage} w='220' h='220'></Image>

          <Box
          mt="1"
          fontWeight="semibold"
          as="h1"
          fontSize="x-large"
          lineHeight="tight"
          textAlign="center"
          isTruncated
          textColor="primary-dark"
          
        >
          Esti gata sa incepi aventura?
        </Box>
          </ModalBody>
          <ModalFooter>
          <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' mr={3} onClick={startCourseHandler}>
              Sa incepem
            </Button>
          </ModalFooter>
        </ModalContent>
        
    </Modal>

    </Box>
  );
}

export default CourseDescriptionCardOnProgress;


