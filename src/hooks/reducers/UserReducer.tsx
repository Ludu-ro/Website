import { UserActionType, UserActions } from "../../hooks";
import { UserState } from "../UserContext";

export const UserReducer = (
  state: UserState,
  action: UserActions
): UserState => {
  switch (action.type) {
    // save user in global state
    case UserActionType.SetUser: {
      const { user } = action;
      // save user in local storage
      localStorage.setItem("user", JSON.stringify(user));
      return {
        ...state,
        user,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
