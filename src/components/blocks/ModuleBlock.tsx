import { Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import { useState } from "react";
import { Module } from "../../types";
import AcceptButton from "./AcceptButton";
import ActionButton from "./ActionButton";
import ImageUpload from "./ImageUpload";

interface ModuleInput {

    index: number,
    handleRemoveModule: any
    handleModuleData: any
    values: any
}

function ModuleBlock({index, handleRemoveModule, handleModuleData, values}: ModuleInput){

    const [errors, setErrors] = useState<any>({});

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [xp, setXp] = useState(0) 
    const [isFormEnabled, setisFormEnabled] = useState(false);

    const validate = () => {
        const errors: any = {};
        if (!title) {
          errors.fieldName = "Camp obligatoriu";
        }

        if(!description){

            errors.description = "Camp obligatotiu";
        }

        if(!xp){

            errors.Xp = "Camp obligatotiu";
        }
        
        return errors;
      };

      const handleCreateModule = async () => {
        const errors = validate();
        setErrors(errors);

        if (Object.keys(errors).length > 0) return;
        
        else{
            
            const module : Module = {
                title: title,
                description: description,
                xp: xp,
                moduleId: "",
                homeworkId: "",
                quizId: ""
            }

            
            values.modules.push(module)
            setisFormEnabled(true)
        }
      };


    return (

        <Flex
        border="1px"
        bg="whitesmoke"
        borderColor="primary-dark"
        margin="5"
        rounded='md'
        p="10"
        direction="column"
        pt="5"
        gap="5"
        justifyContent="space-around"
        >
        <fieldset disabled={isFormEnabled}>
        <FormControl isRequired isInvalid={!!errors.fieldName}>
            <FormLabel textColor="primary-dark"  htmlFor='title' >Titlul modulului</FormLabel>
            <Input    
                borderColor="primary-dark" 
                value={title}
                onChange = {e => setTitle(e.target.value)}
            />  
            <FormErrorMessage>{errors.fieldName}</FormErrorMessage>
            <FormHelperText>Introdu un titlu atractiv</FormHelperText>
        </FormControl>


        <FormControl isRequired isInvalid={!!errors.description}>
            <FormLabel textColor="primary-dark" htmlFor='description'>Descrierea modulului</FormLabel>
            <Input 
                borderColor="primary-dark" 
                value={description}
                onChange = {e => setDescription(e.target.value)}
                id='description'
                type='description' />
            <FormErrorMessage>{errors.description}</FormErrorMessage>
            <FormHelperText>O descriere cat mai interesanta poate aduce mai multi cursanti</FormHelperText>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.Xp}>
            <FormLabel textColor="primary-dark"  htmlFor='xp'>XP Curs</FormLabel>
                <NumberInput
                    borderColor="primary-dark" 
                    value={xp}
                    onChange = {e => setXp(Number(e))}
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

        <FormControl isRequired isInvalid={!!errors.image}>
            <FormLabel textColor="primary-dark" htmlFor='photo'>Incarca resursa necesare acestui curs</FormLabel>
                <ImageUpload 
                        text={"Adauga o resursa"}
                        handleFormData={handleModuleData}
                        values = {values}
                        module = {module}
                />
            <FormErrorMessage>{errors.image}</FormErrorMessage>
        </FormControl>

        <Flex m="10" direction="row" justifyContent="space-around">
            <Button  colorScheme='teal' disabled={isFormEnabled} onClick={handleCreateModule}>
                Adauga Modul
            </Button>
            <Button 
                disabled={isFormEnabled}
                bg="tertiary"
                color="font-primary"  
                onClick={handleRemoveModule(index)}>
                Remove
            </Button>
        </Flex>
        </fieldset>
       
    </Flex>
    );
}

export default ModuleBlock;