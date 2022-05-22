import React, { useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { Flex } from "@chakra-ui/react";
import { ActionButton } from "../blocks";
import { useNavigate, useParams } from "react-router-dom";
import { startModule, finishModule, increaseXp, getDetails } from "../../clients";
import { UserContext, UserActionType } from "../../hooks";
import { useContext } from "react";
import { Module, ModuleStatus, Status, Student, User } from "../../types";
import ReactPlayer from 'react-player'

interface PdfModuleInterface {
  resource: string | undefined;
  moduleXp: number | undefined;
  targetModule: Module | undefined;
}

function VideoModule({targetModule, resource, moduleXp }: PdfModuleInterface) {

    const { user, dispatch } = useContext(UserContext);
    const { courseId, moduleId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (
          user?.courses &&
          user?.courses.find((m: ModuleStatus) => m.id === moduleId)["status"] === Status.NotStarted
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
    
      const handleEnded = () => {
        console.log('onEnded')
        if (
            user?.courses &&
            user.courses.find((m: ModuleStatus) => m.id === moduleId)["status"] === Status.Started
          ) {
            //api call
            finishModule(user?.id, moduleId || "", localStorage.getItem("jwt"));
            increaseXp(user.id, moduleXp || 0, localStorage.getItem("jwt"))
      
            //update our user locally
            getDetails(user.id, user.role).then((u) => {
              u.role = user.role;
              dispatch({
                type: UserActionType.SetUser,
                user: u,
              });
            });

        if(targetModule?.quiz){
            navigate(`quiz`);
        }
          }
      }

  return (
         <ReactPlayer   
         onEnded={handleEnded}
         width='1000px'
         height='100%' url={resource} controls={true}/>
  );
}

export default VideoModule;
