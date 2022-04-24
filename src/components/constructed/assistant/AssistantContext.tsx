import React, { createContext, ReactNode, useState } from "react";

export interface AssistantContextInterface {
  archiveMessages: Array<string>;
  messages: Array<string>;
  setMessages: Function;
  isClosed: boolean;
  setIsClosed: Function;
}

const AssistantContext = createContext<AssistantContextInterface>({
  archiveMessages: [],
  messages: [],
  setMessages: () => {},
  isClosed: false,
  setIsClosed: () => {},
});

const mockMessages = [
  "Bine ai venit!",
  "Cu ce te pot ajuta?",
  "Logheaza-te sau inregistreaza-te pentru a putea accesa cursurile.",
];

const AssistantContextProvider = ({ children }: { children: ReactNode }) => {
  const [archiveMessages, setArchiveMessages] =
    useState<Array<string>>(mockMessages);
  const [messages, setMessages] = useState<Array<string>>(mockMessages);
  const [isClosed, setIsClosed] = useState<boolean>(false);

  return (
    <AssistantContext.Provider
      value={{ archiveMessages, messages, setMessages, isClosed, setIsClosed }}
    >
      {children}
    </AssistantContext.Provider>
  );
};

export { AssistantContext, AssistantContextProvider };
