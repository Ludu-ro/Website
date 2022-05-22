import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addAchievement, getCourse, getResource } from "../../clients";
import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import { Course, Module as ModuleType } from "../../types";
import { ModuleAccordion, PdfModule } from "../constructed";
import QuizModule from "../constructed/QuizModule";
import Achievement from "../blocks/Achievement";
import { UserContext } from "../../hooks";

enum ResourceType {
  PDF = "pdf",
  WYSIWYG = "wysiwyg",
  VIDEO = "video",
  Quiz = "quiz",
}

interface Resource {
  type: ResourceType;
  url: any;
}

function Module() {
  const toast = useToast();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { courseId, moduleId } = useParams();
  const isQuizPage = pathname.includes("quiz");

  const { user } = useContext(UserContext);

  const [course, setCourse] = useState<Course>();
  const [targetModule, setTargetModule] = useState<ModuleType>();
  const [resource, setResource] = useState<Resource>();

  const loadData = async () => {
    const course = await getCourse(courseId);
    setCourse(course);
    if (!moduleId) {
      navigate(`/course/${courseId}/module/${course.modules[0].moduleId}`);
    } else {
      const module = course.modules.find((m) => m.moduleId === moduleId);
      setTargetModule(module);
      setResource(undefined);
    }
  };

  useEffect(() => {
    loadData();
  }, [courseId, moduleId]);

  // achievement inceput primul curs
  useEffect(() => {
    if (!user || !course || !course.tags) return;
    for (let i = 0; i < course.tags.length; i++) {
      const tag = course.tags[i];
      if (tag === "JAVA") {
        addAchievement(user.id, "FirstJavaCourse").then(() => {
          toast({ ...Achievement({ type: "FirstJavaCourse" }) });
        });
      }
      if (tag === "AWS") {
        addAchievement(user.id, "FirstAwsCourse").then(() => {
          toast({ ...Achievement({ type: "FirstAwsCourse" }) });
        });
      }
      if (tag === "PYTHON") {
        addAchievement(user.id, "FirstPythonCourse").then(() => {
          toast({ ...Achievement({ type: "FirstPythonCourse" }) });
        });
      }
      if (tag === "MYSQL") {
        addAchievement(user.id, "FirstMySqlCourse").then(() => {
          toast({ ...Achievement({ type: "FirstMySqlCourse" }) });
        });
      }
    }
  }, [user, course]);

  const computeResourceType = (resources: string): ResourceType => {
    if (resources.endsWith("pdf")) {
      return ResourceType.PDF;
    }
    return ResourceType.WYSIWYG;
  };

  const computeResource = async (resources: string): Promise<Resource> => {
    if (isQuizPage) {
      return { type: ResourceType.Quiz, url: targetModule?.quiz };
    }
    const url = await getResource(resources);
    const type = computeResourceType(resources);
    return { type, url };
  };

  useEffect(() => {
    if (!targetModule) return;
    if (!targetModule.resources) return setResource(undefined);
    computeResource(targetModule.resources).then((resource) => {
      setResource(resource);
    });
  }, [targetModule, isQuizPage]);

  function ResourceViewer({ resource }: { resource?: Resource }) {
    if (resource?.type === ResourceType.PDF) {
      return <PdfModule resource={resource.url} moduleXp={100} />;
    }
    if (resource?.type === ResourceType.Quiz) {
      return <QuizModule quiz={resource.url} />;
    }
    return <Box color="font-secondary">Cursul nu are nicio resursa</Box>;
  }

  if (!course || !targetModule) {
    return <div>Se incarca...</div>;
  }

  return (
    <Flex pb="4" bg="primary-dark" alignItems="center" direction="column">
      <Text color="font-secondary" fontSize="2xl" m="4">
        {targetModule?.title}
      </Text>
      <Flex gap="4" alignItems="flex-start">
        <ModuleAccordion
          modules={course?.modules}
          targetModule={targetModule}
        />
        <ResourceViewer resource={resource} />
      </Flex>
    </Flex>
  );
}

export default Module;
