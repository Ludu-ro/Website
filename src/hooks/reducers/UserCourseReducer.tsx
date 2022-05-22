import { UserCourseActions, UserCourseActionType } from "../actions/UserCourseActions";
import { UserCourseState } from "../UserCourseContext";

export const UserCourseReducer = (
  state: UserCourseState,
  action: UserCourseActions
): UserCourseState => {
  switch (action.type) {
    // used when provided with a new list of courses
    case UserCourseActionType.SetCourses: {
      const { courses } = action;
      return {
        ...state,
        courses: courses,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
