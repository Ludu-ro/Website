import {
    Flex,
    Box,
    FormControl,
    FormHelperText,
    Input,
    FormLabel,
    NumberInput,
    NumberInputField,
    Select as SelectBasic, 
    NumberIncrementStepper,
    NumberInputStepper,
    NumberDecrementStepper,
  } from "@chakra-ui/react";

  import {
    Select,
    OptionBase,
    GroupBase
  } from "chakra-react-select";
import { useNavigate } from "react-router";
import { ActionButton } from "../blocks";
import ImageUpload from "../blocks/ImageUpload";
  

  interface TagsOption extends OptionBase {
    label: string;
    value: string;
  }

  const tags = [
    { value: "PYTHON", label: "PYTHON" },
    { value: "JAVA", label: "JAVA" },
    { value: "AWS", label: "AWS" },
    { value: "MYSL", label: "MYSL" },
  ];

  export const tagsOptions = [
    {
      label: "Tags",
      options: tags
    }
  ];
  
  function CourseCreate() {

    const navigate = useNavigate();
  
    return (
        <Flex
        pt="5"
        gap="5"
        bg="primary-dark"
        color="font-secondary"
        justifyContent="space-around"
      >
    
        <Box justifyContent="space-evenly" w="70%" boxShadow='dark-lg' p='4%' m="2%" rounded='md' bg='white' gap="10"  color="font-primary" cursor="pointer"  alignSelf="flex-start" alignContent="flex-start">
        
        <Box
          mt="1"
          fontWeight="semibold"
          as="h1"
          fontSize="xxx-large"
          lineHeight="tight"
          textAlign="left"
          isTruncated
          justifyContent="space-evenly"
          textColor="primary-dark"
        >
          Adauga un curs nou
        </Box>
          
        <FormControl isRequired>
            <FormLabel textColor="primary-dark"  htmlFor='title'>Titlu</FormLabel>
            <Input id='title' type='title' />
            <FormHelperText>Introdu un titlu atractiv</FormHelperText>
        </FormControl>

        <FormControl isRequired>
            <FormLabel textColor="primary-dark" htmlFor='description'>Descriere</FormLabel>
            <Input id='description' type='description' />
            <FormHelperText>O descriere cat mai interesanta poate aduce mai multi cursanti</FormHelperText>
        </FormControl>

        <FormControl isRequired>
        <FormLabel textColor="primary-dark" htmlFor='xp'>XP Curs</FormLabel>
        <NumberInput max={50} min={0}>
            <NumberInputField id='xp' />
            <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
        </FormControl>

        <FormControl isRequired>
            <FormLabel htmlFor='tags' textColor="primary-dark">
                Selecteaza tag-urile asociate cursului
            </FormLabel>
            <Select<TagsOption, true, GroupBase<TagsOption>> id="tags"
                isMulti
                name="colors"
                options={tags}     
                colorScheme="purple"
                placeholder="Selecteaza un tag..."
                closeMenuOnSelect={false}
            />
              <FormHelperText>Selecteaza cele mai relevante tag-uri pentru cursul tau</FormHelperText>
        </FormControl>

        <FormControl isRequired>
        <FormLabel textColor="primary-dark" htmlFor='hours'>Durata cursului in ore</FormLabel>
        <NumberInput max={1000} min={0}>
            <NumberInputField id='hours' />
            <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
        <FormHelperText>Gandeste-te la durata medie de parcurgere a cursului</FormHelperText>
        </FormControl>


        <FormControl isRequired>
            <FormLabel textColor="primary-dark" htmlFor='difficulty'>Difficulty</FormLabel>
            <SelectBasic id='difficulty' placeholder='Selecteaza dificultatea'>
                <option>EASY</option>
                <option>MEDIUM</option>
                <option>HARD</option>
            </SelectBasic>
        <FormHelperText>Alegand dificultate poti ajuta viitorii cursanti sa decida daca acesta e cursul potrivit pentru ei</FormHelperText>
        </FormControl>

        <FormControl isRequired>
            <FormLabel textColor="primary-dark" htmlFor='photo'>Incarca o poza</FormLabel>
            <FormHelperText>Alege o poza reprezentativa pentru cursul tau</FormHelperText>
            <ImageUpload></ImageUpload>
        </FormControl>

        <Box p="10" display="grid">
        <ActionButton width="50" onClick={() => navigate("/addCourse")}> Continua crearea cursului</ActionButton>
        </Box>
        
        </Box> 
            
      </Flex>
    );
  }

  
export default CourseCreate;

  