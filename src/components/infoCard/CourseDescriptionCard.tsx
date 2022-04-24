import { Badge, Box, Text, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Icon } from "@chakra-ui/react";
import { RiFilePaper2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Course } from "../../types/Course";
import { ActionButton, InfoButton, Stars } from "../blocks";


interface CourseDetailsInterface {
    course: Course;
  }

function CourseDescriptionCard({ course }: CourseDetailsInterface) {

  const navigate = useNavigate();
  
  return (
    <Box alignItems="center" boxShadow='dark-lg' p='6' rounded='md' bg='white'  color="font-primary" cursor="pointer" w="70%">
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

        
          <Accordion textStyle='semibold'>
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
        
        <Box alignSelf="center" alignItems="center">
          <ActionButton width="sm"  onClick={() => navigate("/login")}>
            Incepe Cursul
          </ActionButton>
        </Box>
      </Box>
    </Box>
  );
}

export default CourseDescriptionCard;
