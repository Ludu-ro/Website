import { useState } from "react";
import { Course, Module } from "../../types";
import { CourseInput } from "../../types/CourseInput";

import CourseCreateBasicDetails from "./CourseCreateBasicDetails";
import CreateSucces from "./CreateSuccess";
import ModuleCreate from "./ModuleCreate";



function CourseCreate(){
    const [step, setstep] = useState(1);
    

    const [courseInput, setFormData] = useState<CourseInput>({
        teacherId: "",
        title: "",
        description: "",
        duration: 0,
        difficulty: 0,
        tags: [],
        xpValue: 0,
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

        const value = courseInput.modules.push(args[0])

        setFormData(prevState => ({
        ...prevState,
        [input]: value
}))}

    switch (step) {
        
        case 1:
        return (
                <CourseCreateBasicDetails
                    nextStep={nextStep}
                    handleFormData={handleInputData} 
                    values={courseInput} />
        );
        case 2:
        return (
            <ModuleCreate
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleFormData={handleAddModuleData} 
                    values={courseInput} />
        );
        default:
        return (
            <CreateSucces/>
        );
    }

}


  
export default CourseCreate;