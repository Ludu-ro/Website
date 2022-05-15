import React, { createContext, ReactNode, useEffect, useReducer } from "react";
import getDetails from "../clients/users/getDetails";
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
    const userData = localStorage.getItem("user");

    if (userData) {
      const user: User = JSON.parse(userData);
      
      // TODO: remove this later
      // small fix because we didn't save the user id last time
      if (user.id === undefined) {
        localStorage.removeItem("user");
        return;
      }
      
      dispatch({
        type: UserActionType.SetUser,
        user: user,
      });
    }
  }, []);

  // on jwt token change update user info
  useEffect(() => {
    if (!userState.user) return;
    const { id, role } = userState.user;
    getDetails(id!, role!).then((user) => {
      dispatch({
        type: UserActionType.SetUser,
        user,
      });
    });
  }, [userState.user?.jwtToken]);

  return (
    <UserContext.Provider value={{ ...userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
