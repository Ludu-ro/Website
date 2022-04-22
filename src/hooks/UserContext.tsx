import React, { createContext, ReactNode, useReducer, useState } from "react";
import { User } from "../types";
import { UserActions, UserReducer } from "./";

export type UserState = {
  user: User | null;
  isLoading: boolean;
};

export interface UserContextInterface {
  user: User | null;
  isLoading: boolean;
  dispatch: React.Dispatch<UserActions>;
}

const UserContext = createContext<UserContextInterface>({
  user: null,
  isLoading: true,
  dispatch: () => {},
});

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [usertate, dispatch] = useReducer(UserReducer, {
    user: null,
    isLoading: true,
  });

  return (
    <UserContext.Provider value={{ ...usertate, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
