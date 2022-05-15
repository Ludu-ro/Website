import {
    Flex,
    Box,
    Select as SelectBasic, 
  } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import createCourse from "../../clients/courses/createCourse";
import { AcceptButton, ActionButton } from "../blocks";
import ModuleBlock from "../blocks/ModuleBlock";

  interface InputMultiPart {

    nextStep: any,
    prevStep: any,
    handleFormData: any,
    values: any
  }

  
  function ModuleCreate({ nextStep, prevStep, handleFormData, values } : InputMultiPart) {
      
    const [indexes, setIndexes] = React.useState<number[]>([]);
    const [counter, setCounter] = React.useState<number>(0);

    const addModule = () => {
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeModule = (index: any) => () => {
      setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
      setCounter(prevCounter => prevCounter - 1);
  };
    

    const clearModule = () => {
        setIndexes([]);
      };

    const handleCreateCourse = async () => {

      console.log(values)
      const course = await createCourse(values);
    }

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
          Adauga Modulurile Cursului
        </Box>

        {
        indexes.map(index => {
           return ( <ModuleBlock index={index} handleRemoveModule={removeModule} handleModuleData={handleFormData} values={values} />)
      })}


        <Flex  direction="column" p="5" justifyContent="space-evenly">
            <AcceptButton width="50" onClick={addModule}>Adauga un modul</AcceptButton>        
        </Flex>
        
        <Flex  direction="column" p="5" justifyContent="space-evenly">
            <AcceptButton width="50" onClick={clearModule}>Sterge modulele</AcceptButton>
        </Flex>

        <Flex p="10" justifyContent="space-around">
            <ActionButton width="50" onClick={prevStep}> Revino la pagina anterioara</ActionButton>
            <ActionButton width="50" onClick={handleCreateCourse}> Finalizeaza crearea cursului</ActionButton>
        </Flex>
        
        </Box> 
            
      </Flex>
    );
  }

  
export default ModuleCreate;
  