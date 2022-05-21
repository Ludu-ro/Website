import { CourseRecommandationActionType, CourseRecommandationActions } from "../../hooks";
import { CourseRecommandationState } from "../CourseRecommandationContext";

export const CourseRecommandationReducer = (
  state: CourseRecommandationState,
  action: CourseRecommandationActions
): CourseRecommandationState => {
  switch (action.type) {
    // used when provided with a new list of courses
    case CourseRecommandationActionType.SetCourses: {
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
