import { CourseDetailsActionType } from "../../hooks";
import { CourseDetailsActions } from "../actions/CourseDetailsActions";
import { CourseDetailsState } from "../CourseDetailsContext";

export const CourseDetailsReducer = (
  state: CourseDetailsState,
  action: CourseDetailsActions
): CourseDetailsState => {

    console.log("Here")
  console.log(action.type)
  switch (action.type) {

    case CourseDetailsActionType.SetCourseDetails: {
      const { courseDetails } = action;
  
      return {
        ...state,
        courseDetails,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
