import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { ModuleResolutionKind } from "typescript";
import { Course, Module } from "../../types";

import CourseCreateBasicDetails from "./CourseCreateBasicDetails";
import ModuleCreate from "./ModuleCreate";


function CourseCreate(){
    const [step, setstep] = useState(1);
    

    const [formData, setFormData] = useState<Course>({
        teacherId: "",
        courseId: "",
        title: "",
        description: "",
        duration: 0,
        difficulty: 0,
        tags: [],
        xpValue: 0,
        rating: 0,
        numberOfAttendees: 0,
        reviews: 0,
        image: "",
        modules : []
    })

    const nextStep = () => {
        
        setstep(step + 1);
    };

    const prevStep = () => {
        setstep(step - 1);
    };

    const handleInputData = (input: any, ...args: string[]) => (e: any) => {

        console.log("Original Form")

        if(input === "xp" || input === "duration"){

            const value = Number(e);
            setFormData(prevState => ({
            ...prevState,
            [input]: value

        }))}
        else if(input === "image"){

            const value = args[0];
            setFormData(prevState => ({
            ...prevState,
            [input]: value
        }))}
        else if(input === "tags"){

            const value = e.map((val: { value: any; }) => val.value)
            setFormData(prevState => ({
            ...prevState,
            [input]: value
        }))}
        else{
            const {value } = e.target;
            setFormData(prevState => ({
            ...prevState,
            [input]: value
        }));
    }
}


const handleAddModuleData = (input: any, ...args: Module[]) => (e: any) => {

        const value = formData.modules.push(args[0])
        console.log(value)
        console.log(args)

        setFormData(prevState => ({
        ...prevState,
        [input]: value
}))}

    switch (step) {
        
        case 2:
        return (
                <CourseCreateBasicDetails
                    nextStep={nextStep}
                    handleFormData={handleInputData} 
                    values={formData} />
        );
        case 1:
        return (
            <ModuleCreate
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleFormData={handleAddModuleData} 
                    values={formData} />
        );
        default:
        return (
            <Flex></Flex>
        );
    }

}


  
export default CourseCreate;