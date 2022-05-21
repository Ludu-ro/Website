import { Button, Text, Select as SelectBasic,Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import React, { useState } from "react";
import { QuestionInput } from "../../types/QuestionInput";
import { QuizInput } from "../../types/QuizInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { ModuleInput } from "../../types/ModuleInput";


function QuizBlock({module} : any){

    const [errors, setErrors] = useState<any>({});
    errors.errorsQuestions = []
    

    const [title, setTitle] = useState("");
    const [xp, setXp] = useState(0) 
    const [isFormEnabled, setisFormEnabled] = useState(false);
    const [questions, setQuestions] = React.useState<QuestionInput[]>([])
    
    const quiz: QuizInput = {
        name: "",
        xp: 0,
        questions: []
    }

    const validate = () => {
        const errors: any = {};

        if (!title) {
          errors.fieldName = "Camp obligatoriu";
        }

        if(!xp){

            errors.Xp = "Camp obligatotiu";
        }

        if(questions.length == 0){

            errors.noQuestion = "Adauga macar o intrebare"
        }

        for(let i =0; i< questions.length; i++){

            if(!questions[i].questionText){

                errors["questionText" + i] = "Camp obligatoriu"
            }

            if(!questions[i].difficulty){

                errors["questionDif" + i] = "Camp obligatoriu"
            }

            if(questions[i].answers.length == 0){

                errors["noAnswer" + i] = "Adauga macar un raspuns"
            }

            if(!questions[i].correctAnswer){

                errors["correctAnswer" + i] = "Camp obligatoriu"
            }

            for(let l = 0; l < questions[i].answers.length; l++){

                if(!questions[i].answers[l])
                    errors["answer" + i + l] = "Camp obligatoriu"
            }

        }
        
        return errors;
      };

      var border: string = "primary-dark";

      const handleCreateQuiz = async () => {
        const errors = validate();
        setErrors(errors);

        if (Object.keys(errors).length > 0) return;
        
        else{
            
            quiz.name = title
            quiz.xp = xp
            quiz.questions = questions
            module.quiz = quiz
            console.log(module)
            setisFormEnabled(true)
        }
      };

    const handleAddQuestion = async() => {

        setQuestions(prevQuestions => [...prevQuestions, {answers : []}])
    }

    const handleAddAnswer = (index: number) => {
        
        let newArr = [...questions];
        let answers = newArr[index].answers
        answers?.push("")
        setQuestions(newArr);
    }

    const updateQuestionText = (index: number) => (e: { target: { name: string; value: any; }; }) => {

            let newArr = [...questions];
            newArr[index].questionText = e.target.value;
            setQuestions(newArr);
      }

      const updateDifficulty = (index: number) => (e: { target: { name: string; value: any; }; }) => {

            let newArr = [...questions];
            newArr[index].difficulty = e.target.value;
            setQuestions(newArr);
      }

      const updateAnswerText = (index: number, indexAnswer: number) => (e: { target: { name: string; value: any; }; }) => {

        let newArr = [...questions];
        newArr[index]!.answers![indexAnswer] = e.target.value;
        setQuestions(newArr);
  }

      const handleRemoveElement = (question: QuestionInput) => {

            let filteredArray = questions.filter(item => item !== question)
            setQuestions(filteredArray);
       }

       const handleRemoveAnswer = (index:number, indexAnswer:number) =>{

            let newArr = [...questions];
            let answers = newArr[index]!.answers
            if (indexAnswer !== -1) {

                answers.splice(indexAnswer, 1);
            }
            setQuestions(newArr)
       }

       const updateCorrectAnswer = (index: number) => (e: { target: { name: string; value: any; }; }) => {

            let newArr = [...questions];
            newArr[index].correctAnswer = e.target.value;
            setQuestions(newArr);
       }

    return (

        <Flex
            border="1px"
            bg="white"
            borderColor={border}
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
            <FormLabel textColor="primary-dark"  htmlFor='title' >Titlul quiz</FormLabel>
            <Input    
                borderColor="primary-dark" 
                value={title}
                onChange = {e => setTitle(e.target.value)}
            />  
            <FormErrorMessage>{errors.fieldName}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.Xp}>
            <FormLabel textColor="primary-dark"  htmlFor='xp'>XP Quiz</FormLabel>
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

        <Button marginTop='5' colorScheme='purple' onClick={ handleAddQuestion}>
                + Adauga Intrebare
        </Button>
        <Text color="red">{errors.noQuestion}</Text>

        { questions.map((question, index) => {
        
        return (
            <Flex
                border="1px"
                bg="whitesmoke"
                borderColor={border}
                margin="5"
                rounded='md'
                p="10"
                direction="column"
                pt="5"
                gap="5"
                justifyContent="space-around"
            >
            
            <FontAwesomeIcon icon={faTrash} onClick = {() => handleRemoveElement(question)}/>

            <FormControl isRequired isInvalid={!!errors["questionText" + index]}>
            <FormLabel textColor="primary-dark"  htmlFor='title' >Intrebarea</FormLabel>
            <Input   
                name = "questionText" 
                borderColor="primary-dark" 
                value={question.questionText}
                onChange = {updateQuestionText(index)}
            />  
            <FormErrorMessage>{errors["questionText" + index]}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={!!errors["questionDif" + index]}>
            <FormLabel textColor="primary-dark" htmlFor='difficulty'>Dificultate</FormLabel>
            <SelectBasic value={question.difficulty} onChange={updateDifficulty(index)} id='difficulty' placeholder='Selecteaza dificultatea'>
                <option>EASY</option>
                <option>MEDIUM</option>
                <option>HARD</option>
            </SelectBasic>
            <FormErrorMessage>{errors["questionDif" + index]}</FormErrorMessage>
            </FormControl>
            <Button marginTop='5' colorScheme='purple' onClick={() => handleAddAnswer(index)}>
                + Adauga Raspuns
            </Button>
            <Text color="red">{errors["noAnswer"+index]}</Text>
            {
                question!!.answers!!.map((answer, indexAnswer) => {

                    return (
                        <Flex
                        flexDirection="row"
                        placeItems="center"
                        margin="1"
                        p="5"
                        direction="column"
                        pt="1"
                        gap="2"
                        justifyContent="space-around"
                        >
                        <FormControl isRequired isInvalid={!!errors["answer" + index + indexAnswer]}>
                            <FormLabel textColor="primary-dark"  htmlFor='raspuns' >Raspuns {indexAnswer + 1}</FormLabel>
                            <Input   
                                name = "questionText" 
                                borderColor="primary-dark" 
                                value={answer}
                                onChange = {updateAnswerText(index, indexAnswer)}
                            />  
                            <FormErrorMessage>{errors["answer" + index + indexAnswer]}</FormErrorMessage>
                        </FormControl>

                        <FontAwesomeIcon icon={faTrash} onClick = {() => handleRemoveAnswer(index, indexAnswer)}/>
                        </Flex>

                    )
                })
            }

            <FormControl isRequired isInvalid={!!errors["correctAnswer" + index]}>
            <FormLabel textColor="primary-dark" htmlFor='correctAnswer'>Raspuns Corect</FormLabel>
            <SelectBasic value={questions[index].correctAnswer} onChange={updateCorrectAnswer(index)} placeholder='Selecteaza raspunsul corect'>
                    { questions[index].answers.map((answerOption, index) => 
                     <option>{answerOption}</option> 
                     )
                    }
            </SelectBasic>
            <FormErrorMessage>{errors["correctAnswer" + index]}</FormErrorMessage>
            </FormControl>
            </Flex>
        );

        }
    )}

        <Flex m="10" direction="row" justifyContent="space-around">
            <Button  colorScheme='teal' disabled={isFormEnabled} onClick={handleCreateQuiz}>
                Salveza Quiz
            </Button>
            <Button 
                disabled={isFormEnabled}
                bg="tertiary"
                color="font-primary"  >
                Curata
            </Button>
        </Flex>
        </fieldset>
       
    </Flex>
    );
}

export default QuizBlock;