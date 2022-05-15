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
    FormErrorMessage,
  } from "@chakra-ui/react";

  import {
    Select,
    OptionBase,
    GroupBase,
    MultiValue
  } from "chakra-react-select";
import { useState } from "react";
import { ActionButton } from "../blocks";
import ImageUpload from "../blocks/ImageUpload";
  

  interface TagsOption extends OptionBase {
    label: string;
    value: string;
  }

  const tagsValues = [
    { value: "PYTHON", label: "PYTHON" },
    { value: "JAVA", label: "JAVA" },
    { value: "AWS", label: "AWS" },
    { value: "MYSQL", label: "MYSQL" },
  ];

  export const tagsOptions = [
    {
      label: "Tags",
      options: tagsValues
    }
  ];

  interface InputMultiPart {

    nextStep: any,
    handleFormData: any,
    values: any
  }

  
  function CourseCreateBasicDetails({ nextStep, handleFormData, values } : InputMultiPart) {


    const [errors, setErrors] = useState<any>({});

    const validate = () => {
        const errors: any = {};
        if (!values.title) {
          errors.title = "Camp obligatoriu";
        }

        if(!values.description){

            errors.description = "Camp obligatotiu";
        }

        if(!values.xp){

            errors.Xp = "Camp obligatotiu";
        }
        
        if(values.tags.length == 0){

            errors.tags = "Seteaza macar un tag"
        }

        if(!values.duration){

            errors.duration = "Camp obligatoriu";
        }

        if(!values.difficulty){

            errors.difficulty = "Camp obligatoriu";
        }
        if(!values.image){

            errors.image = "Incarca o imagine"
        }

        return errors;
      };
    
    
      const handleCreateCourse = async () => {
        const errors = validate();

        setErrors(errors);

        if (Object.keys(errors).length > 0) return;
        
        else{
            
            nextStep();
        }
      };
    
  
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
        

        <FormControl isRequired isInvalid={!!errors.title}>
            <FormLabel textColor="primary-dark"  htmlFor='title' >Titlu</FormLabel>
            <Input    
              value={values.title}
              onChange={handleFormData("title")}
              />  
            <FormErrorMessage>{errors.title}</FormErrorMessage>
            <FormHelperText>Introdu un titlu atractiv</FormHelperText>
        </FormControl>


        <FormControl isRequired isInvalid={!!errors.description}>
            <FormLabel textColor="primary-dark" htmlFor='description'>Descriere</FormLabel>
            <Input 
                value={values.description}
                onChange={handleFormData("description")}
                id='description'
                type='description' />
            
            <FormErrorMessage>{errors.description}</FormErrorMessage>
            <FormHelperText>O descriere cat mai interesanta poate aduce mai multi cursanti</FormHelperText>
        </FormControl>


        <FormControl isRequired isInvalid={!!errors.Xp}>
        <FormLabel textColor="primary-dark" htmlFor='xp'>XP Curs</FormLabel>
            <NumberInput  
                value={values.xp}
                onChange={handleFormData("xp")}
                max={50} 
                min={0}>
                <NumberInputField id='xp' />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <FormErrorMessage>{errors.Xp}</FormErrorMessage>
        </FormControl>


        <FormControl isRequired isInvalid={!!errors.tags}>
            <FormLabel htmlFor='tags' textColor="primary-dark">
                Selecteaza tag-urile asociate cursului
            </FormLabel>
                <Select<TagsOption, true, GroupBase<TagsOption>> id="tags"
                    isMulti
                    name="colors"
                    options={tagsValues}     
                    colorScheme="purple"
                    placeholder="Selecteaza un tag..."       
                    onChange={handleFormData("tags")}  
                    closeMenuOnSelect={false}
                />
            <FormErrorMessage>{errors.tags}</FormErrorMessage>
            <FormHelperText>Selecteaza cele mai relevante tag-uri pentru cursul tau</FormHelperText>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.duration}>
        <FormLabel textColor="primary-dark" htmlFor='hours'>Durata cursului in ore</FormLabel>
        <NumberInput value={values.duration}
                onChange={handleFormData("duration")} max={1000} min={0}>
            <NumberInputField id='hours' />
            <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage>{errors.duration}</FormErrorMessage>
        <FormHelperText>Gandeste-te la durata medie de parcurgere a cursului</FormHelperText>
        </FormControl>


        <FormControl isRequired isInvalid={!!errors.difficulty}>
            <FormLabel textColor="primary-dark" htmlFor='difficulty'>Dificultate</FormLabel>
            <SelectBasic value={values.difficulty} onChange={handleFormData("difficulty")} id='difficulty' placeholder='Selecteaza dificultatea'>
                <option>EASY</option>
                <option>MEDIUM</option>
                <option>HARD</option>
            </SelectBasic>
        <FormHelperText>Alegand dificultate poti ajuta viitorii cursanti sa decida daca acesta e cursul potrivit pentru ei</FormHelperText>
        <FormErrorMessage>{errors.difficulty}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.image}>
            <FormLabel textColor="primary-dark" htmlFor='photo'>Incarca o poza</FormLabel>
            <FormHelperText>Alege o poza reprezentativa pentru cursul tau</FormHelperText>
                <ImageUpload 
                        text={"Adauga o imagine"}
                        handleFormData={handleFormData}
                        values = {values}
                />
           
            <FormErrorMessage>{errors.image}</FormErrorMessage>
        </FormControl>

        <Box p="10" display="grid">
          <ActionButton width="50" onClick={handleCreateCourse}> Continua crearea cursului</ActionButton>
        </Box>
        
        </Box> 
            
      </Flex>
    );
  }

  
export default CourseCreateBasicDetails;
  