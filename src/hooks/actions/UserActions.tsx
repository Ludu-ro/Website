import { User } from "../../types";

export enum UserActionType {
  SetUser = "SET_USER",
}

type SetActions = {
  type: UserActionType.SetUser;
  user: User;
};

export type UserActions = SetActions;
