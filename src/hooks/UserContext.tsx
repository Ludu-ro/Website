import React, {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { User } from "../types";
import { UserActions, UserReducer } from "./";
import { UserActionType } from "./actions/UserActions";

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
  const [userState, dispatch] = useReducer(UserReducer, {
    user: null,
    isLoading: true,
  });

  // load user from local storage
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch({
        type: UserActionType.SetUser,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ ...userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
