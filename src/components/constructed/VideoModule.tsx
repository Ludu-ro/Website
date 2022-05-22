import React, { useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { Flex } from "@chakra-ui/react";
import { ActionButton } from "../blocks";
import { useNavigate, useParams } from "react-router-dom";
import { startModule, finishModule, increaseXp, getDetails } from "../../clients";
import { UserContext, UserActionType } from "../../hooks";
import { useContext } from "react";
import { ModuleStatus, Status, Student, User } from "../../types";
import ReactPlayer from 'react-player'

interface PdfModuleInterface {
  resource: string | undefined;
  moduleXp: number | undefined;
}

function VideoModule({ resource, moduleXp }: PdfModuleInterface) {

  const navigate = useNavigate();

  console.log(resource)

  return (
         <ReactPlayer   width='1000px'
         height='100%' url={resource} controls={true}/>
  );
}

export default VideoModule;
