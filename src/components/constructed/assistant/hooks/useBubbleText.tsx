import React, { useContext, useEffect, useState } from "react";
import { AssistantContext } from "../AssistantContext";

interface UseBubbleTextInterface {
  message: string;
  textSpeed: number;
  finishTime: number;
  onFinish: Function;
}

/**
 * Custom hook that returns the text of the bubble, letter by letter for a given message
 * @param {String} message - message that will be displayed in the bubble
 * @param {Number} textSpeed - speed of the text animation
 * @param {Number} finishTime - time after which the animation will finish
 * @param {Function} onFinish - callback function that will be called when the animation finishes
 */
function useBubbleText({
  message,
  textSpeed,
  finishTime,
  onFinish,
}: UseBubbleTextInterface) {
  const { isClosed } = useContext(AssistantContext);
  const [bubbleText, setBubbleText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  const getBubbleText = async () => {
    // iterate through the message and set the bubble text letter by letter
    await new Promise((resolve) => setTimeout(resolve, textSpeed));
    setBubbleText((bubbleText) => bubbleText + message[messageIndex]);
    setMessageIndex((messageIndex) => messageIndex + 1);
  };

  const finishWord = async () => {
    const numberOfWords = message.split(" ").length;
    await new Promise((resolve) =>
      setTimeout(resolve, finishTime * numberOfWords)
    );
    setBubbleText("");
    onFinish();
  };

  useEffect(() => {
    if (isClosed || !message) return;
    if (messageIndex < message.length) {
      getBubbleText();
    } else {
      finishWord();
    }
  }, [isClosed, messageIndex]);

  useEffect(() => {
    setMessageIndex(0);
  }, [message]);

  return { bubbleText };
}

export default useBubbleText;
