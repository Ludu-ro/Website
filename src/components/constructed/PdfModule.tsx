import React, { useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { Flex, useToast } from "@chakra-ui/react";
import { ActionButton } from "../blocks";
import { useNavigate, useParams } from "react-router-dom";
import {
  startModule,
  finishModule,
  increaseXp,
  getDetails,
  addAchievement,
} from "../../clients";
import { UserContext, UserActionType } from "../../hooks";
import { useContext } from "react";
import { Module, ModuleStatus, Status, Student, User } from "../../types";
import Achievement from "../blocks/Achievement";

interface PdfModuleInterface {
  resource: string;
  moduleXp: number | undefined;
  targetModule: Module | undefined;
}

function PdfModule({ targetModule, resource, moduleXp }: PdfModuleInterface) {
  const toast = useToast();
  const navigate = useNavigate();
  const { courseId, moduleId } = useParams();

  const [pageNumber, setPageNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { user, dispatch } = useContext(UserContext);

  const onPdfLoad = ({ numPages }: any) => {
    setPageNumber(numPages);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (
      user?.courses &&
      user?.courses.find((m: ModuleStatus) => m.id === moduleId)["status"] ===
        Status.NotStarted
    ) {
      //api call
      startModule(user?.id, moduleId || "", localStorage.getItem("jwt"));

      //update our user locally
      const newUser: User = { ...user };
      newUser.courses = user.courses?.map((m: ModuleStatus) => {
        if (m.id === moduleId) {
          return { id: moduleId, status: Status.Started };
        }
        return m;
      });

      dispatch({
        type: UserActionType.SetUser,
        user: newUser,
      });
    }
  }, [courseId, moduleId]);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const nextPage = () => {
    if (currentPage < pageNumber) {
      setCurrentPage((prev) => prev + 1);
      return;
    }

    if (
      user?.courses &&
      user.courses.find((m: ModuleStatus) => m.id === moduleId)["status"] ===
        Status.Started
    ) {
      //api call
      finishModule(user?.id, moduleId || "", localStorage.getItem("jwt"));
      increaseXp(user.id, moduleXp || 0, localStorage.getItem("jwt"));

      //update our user locally
      getDetails(user.id, user.role).then((u) => {
        u.role = user.role;
        dispatch({
          type: UserActionType.SetUser,
          user: u,
        });
      });
    }

    // achievement terminat primul curs
    addAchievement(user?.id, "FirstModuleFinished").then(() => {
      toast({ ...Achievement({ type: "FirstModuleFinished" }) });
    });

    if(targetModule?.quiz){
      navigate(`quiz`);
  }
  };

  return (
    <Flex gap="4" w="75vw">
      <Flex gap="2" direction={"column"}>
        <Document
          error={"PDF-ul nu a putut fi afisate :("}
          file={resource}
          onLoadSuccess={onPdfLoad}
        >
          <Page pageNumber={currentPage} className="test" />
        </Document>

        {/* Buttons */}
        <Flex gap="4">
          {/* Previous button */}
          <ActionButton
            width="50%"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Anterioara pagina
          </ActionButton>

          {/* Next button */}
          <ActionButton width="50%" onClick={nextPage}>
            {currentPage < pageNumber ? "Urmatoarea pagina" : "Termina modul"}
          </ActionButton>
        </Flex>
      </Flex>

      {/* Right outline */}
      <Document file={resource} onLoadSuccess={onPdfLoad} className="outline">
        {Array(pageNumber)
          .fill("")
          .map((_, idx) => (
            <Page
              key={"pdf-page-" + idx}
              pageNumber={idx + 1}
              height={175}
              className={
                idx + 1 === currentPage
                  ? "pdf-page-outline-current"
                  : "pdf-page-outline"
              }
              onClick={() => setCurrentPage(idx + 1)}
            />
          ))}
      </Document>
    </Flex>
  );
}

export default PdfModule;
