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
import { useNavigate } from "react-router";
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
    { value: "MYSL", label: "MYSL" },
  ];

  export const tagsOptions = [
    {
      label: "Tags",
      options: tagsValues
    }
  ];

  
  function CourseCreate() {

    const navigate = useNavigate();
    
    const parse = (val: string) => val.replace(/^\$/, '')
        
    function addTags(e: MultiValue<TagsOption>): void {
        
        const tagsList = e.map(val => val.value)
        setTags(tagsList);
    }


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [xp, setXp] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [duration, setDuration] = useState("");
    const [difficulty, setDifficulty] = useState("");

    const [errors, setErrors] = useState<any>({});


    const validate = () => {
        const errors: any = {};
        if (!title) {
          errors.title = "Camp obligatoriu";
        }

        if(!description){

            errors.description = "Camp obligatotiu";
        }

        if(!xp){

            errors.Xp = "Camp obligatotiu";
        }
        
        if(tags.length == 0){

            errors.tags = "Seteaza macar un tag"
        }

        if(!duration){

            errors.duration = "Camp obligatoriu";
        }

        if(!difficulty){

            errors.difficulty = "Camp obligatoriu";
        }

        return errors;
      };
    
    
      const handleCreateCourse = async () => {
        const errors = validate();
        setErrors(errors);

        if (Object.keys(errors).length > 0) return;
        
        console.log(title);
        console.log(description);
        console.log(xp);
        console.log(tags);
        console.log(duration);
        console.log(difficulty);
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />  
            <FormErrorMessage>{errors.title}</FormErrorMessage>
            <FormHelperText>Introdu un titlu atractiv</FormHelperText>
        </FormControl>


        <FormControl isRequired isInvalid={!!errors.description}>
            <FormLabel textColor="primary-dark" htmlFor='description'>Descriere</FormLabel>
            <Input 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id='description'
                type='description' />
            
            <FormErrorMessage>{errors.description}</FormErrorMessage>
            <FormHelperText>O descriere cat mai interesanta poate aduce mai multi cursanti</FormHelperText>
        </FormControl>


        <FormControl isRequired isInvalid={!!errors.Xp}>
        <FormLabel textColor="primary-dark" htmlFor='xp'>XP Curs</FormLabel>
            <NumberInput  
                value={xp}
                onChange={(e) => setXp(parse(e))}
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
                    onChange={e => addTags(e)}  
                    closeMenuOnSelect={false}
                />
            <FormErrorMessage>{errors.tags}</FormErrorMessage>
            <FormHelperText>Selecteaza cele mai relevante tag-uri pentru cursul tau</FormHelperText>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.duration}>
        <FormLabel textColor="primary-dark" htmlFor='hours'>Durata cursului in ore</FormLabel>
        <NumberInput 
                onChange={(e) => setDuration(parse(e))} max={1000} min={0}>
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
            <FormLabel textColor="primary-dark" htmlFor='difficulty'>Difficulty</FormLabel>
            <SelectBasic value={difficulty} onChange={(e) => setDifficulty(e.target.value)} id='difficulty' placeholder='Selecteaza dificultatea'>
                <option>EASY</option>
                <option>MEDIUM</option>
                <option>HARD</option>
            </SelectBasic>
        <FormHelperText>Alegand dificultate poti ajuta viitorii cursanti sa decida daca acesta e cursul potrivit pentru ei</FormHelperText>
        <FormErrorMessage>{errors.difficulty}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired>
            <FormLabel textColor="primary-dark" htmlFor='photo'>Incarca o poza</FormLabel>
            <FormHelperText>Alege o poza reprezentativa pentru cursul tau</FormHelperText>
            <ImageUpload></ImageUpload>
        </FormControl>

        <Box p="10" display="grid">
        <ActionButton width="50" onClick={handleCreateCourse}> Continua crearea cursului</ActionButton>
        </Box>
        
        </Box> 
            
      </Flex>
    );
  }

  
export default CourseCreate;
  