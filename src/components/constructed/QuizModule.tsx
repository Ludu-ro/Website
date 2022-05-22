import {
  Box,
  CircularProgress,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addAchievement,
  getCourse,
  getDetails,
  increaseXp,
} from "../../clients";
import { UserActionType, UserContext } from "../../hooks";
import { Quiz } from "../../types/Quiz";
import { ActionButton, InfoButton } from "../blocks";
import Achievement from "../blocks/Achievement";

interface QuizModuleInterface {
  quiz: Quiz;
}

function QuizModule({ quiz }: QuizModuleInterface) {
  const toast = useToast();
  const { user, dispatch } = useContext(UserContext);
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();

  const [answers, setAnswers] = useState<Array<String>>(
    Array(quiz.questions.length).fill(null)
  );
  const maxScore = quiz.questions.length;
  const [nextCourseId, setNextCourseId] = useState<String>();
  const [score, setScore] = useState<number>();

  const loadData = async () => {
    const { modules } = await getCourse(courseId);
    for (let i = 1; i < modules.length; i++) {
      if (modules[i - 1].moduleId === moduleId) {
        setNextCourseId(modules[i].moduleId);
        break;
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = () => {
    if (answers.filter((a) => a === null).length > 0) {
      alert("Nu ai raspuns la toate intrebarile!");
      return;
    }

    const score = answers.reduce((acc, curr, index) => {
      if (curr === quiz.questions[index].correctAnswer) {
        return acc + 1;
      }
      return acc;
    }, 0);

    setScore(score);
    if (score > maxScore / 2) {
      //api call
      increaseXp(user?.id, quiz.xp, localStorage.getItem("jwt"));

      //update our user locally
      getDetails(user?.id, user?.role).then((u) => {
        u.role = user?.role;
        dispatch({
          type: UserActionType.SetUser,
          user: u,
        });
      });

      // achievement terminat quiz cu punctaj bun
      addAchievement(user?.id, "GoodQuizScore").then(() => {
        toast({ ...Achievement({ type: "GoodQuizScore" }) });
      });
    }
  };

  const handleNextPage = () => {
    if (nextCourseId) {
      navigate(`/course/${courseId}/module/${nextCourseId}`);
    }
  };

  const handleReset = () => {
    setAnswers(Array(quiz.questions.length).fill(null));
    setScore(undefined);
  };

  if (score !== undefined) {
    return (
      <Flex
        bg="secondary"
        w="55vw"
        direction="column"
        p="4"
        alignItems="center"
      >
        <CircularProgress
          color={score > maxScore / 2 ? "green" : "red"}
          value={(score * 100) / maxScore}
          size="32"
        />
        <Text fontWeight="bold" fontSize="2xl">
          Ai obtinut:
        </Text>
        <Text fontWeight="bold" fontSize="lg">
          {score} /{quiz.questions.length} raspunsuri corecte
          {score > maxScore / 2 ? "! :)" : " :("}
        </Text>
        <Flex mt="4" gap="4">
          <ActionButton onClick={handleReset}>Din nou</ActionButton>
          <InfoButton isLoading={!nextCourseId} onClick={handleNextPage}>
            Cursul urmator
          </InfoButton>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex bg="secondary" w="55vw" direction="column" gap="4" p="4">
      <Text fontSize="4xl" textAlign="center" textStyle="bold">
        {quiz.name}
      </Text>

      {quiz.questions.map((question, idx) => (
        <Box key={`question-${idx}`}>
          <Text textStyle="semibold">
            {`${idx + 1}) ${question.questionText}`}
          </Text>
          <RadioGroup
            p="4"
            onChange={(data) => {
              setAnswers(answers.map((a, i) => (i === idx ? data : a)));
            }}
          >
            <Stack gap="4">
              {question.answers.map((answer, idx) => (
                <Radio key={`answer-${idx}`} value={answer}>
                  {answer}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </Box>
      ))}

      <Flex gap="4">
        <ActionButton onClick={handleSubmit}>Trimite</ActionButton>
        <InfoButton isLoading={!nextCourseId} onClick={handleNextPage}>
          Sari peste
        </InfoButton>
      </Flex>
    </Flex>
  );
}

export default QuizModule;
