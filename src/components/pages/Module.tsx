import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourse, getResource } from "../../clients";
import { Flex, Text } from "@chakra-ui/react";
import { Course, Module as ModuleType } from "../../types";
import { ModuleAccordion, PdfModule } from "../constructed";

enum ResourceType {
  PDF = "pdf",
  WYSIWYG = "wysiwyg",
  VIDEO = "video",
}

interface Resource {
  type: ResourceType;
  url: string;
}

function Module() {
  const { courseId, moduleId } = useParams();
  const [course, setCourse] = useState<Course>();
  const [targetModule, setTargetModule] = useState<ModuleType>();
  const [resource, setResource] = useState<Resource>();

  const loadData = async () => {
    const course = await getCourse(courseId);
    setCourse(course);
    if (!moduleId) {
      setTargetModule(course.modules[0]);
    } else {
      const module = course.modules.find((m) => m.moduleId === moduleId);
      setTargetModule(module);
    }
  };

  useEffect(() => {
    loadData();
  }, [courseId, moduleId]);

  const computeResourceType = (resources: string): ResourceType => {
    if (resources.endsWith("pdf")) {
      return ResourceType.PDF;
    }
    return ResourceType.WYSIWYG;
  };

  const computeResource = async (resources: string): Promise<Resource> => {
    const url = await getResource(resources);
    const type = computeResourceType(resources);
    return {
      type,
      url: url,
    };
  };

  useEffect(() => {
    if (!targetModule) return;
    if (!targetModule.resources) return setResource(undefined);
    computeResource(targetModule.resources).then((resource) => {
      setResource(resource);
    });
  }, [targetModule]);

  function ResourceViewer({ resource }: { resource?: Resource }) {
    if (resource?.type === ResourceType.PDF) {
      return <PdfModule resource={resource.url} />;
    }
    return <div>Not found</div>;
  }

  if (!course || !targetModule) {
    return <div>Se incarca...</div>;
  }

  return (
    <Flex pb="4" bg="primary-dark" alignItems="center" direction="column">
      <Text color="font-secondary" fontSize="2xl" m="4">
        {targetModule?.title}
      </Text>
      <Flex gap="4">
        <ModuleAccordion
          modules={course?.modules}
          targetModule={targetModule}
          setTargetModule={setTargetModule}
        />
        <ResourceViewer resource={resource} />
      </Flex>
    </Flex>
  );
}

export default Module;
