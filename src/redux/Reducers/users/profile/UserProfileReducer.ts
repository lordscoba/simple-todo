import { LOGIN_RESET } from "../../../Constants/authConstants";
import {
  GETBYID_PROFILE_REQUEST,
  GETBYID_PROFILE_SUCCESS,
  GETBYID_PROFILE_FAIL,
  GETBYID_PROFILE_RESET,
} from "../../../Constants/users/UserConstants";
import { initialState } from "../../../Initial-State/initialState";
import { ActionType, ReduxResponseType } from "../../../Types/todoTypes";

export const GetProfileByIdReducer = (
  state: ReduxResponseType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case GETBYID_PROFILE_REQUEST:
      return { ...initialState, loading: true };
    case GETBYID_PROFILE_SUCCESS:
      return {
        ...initialState,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };
    case GETBYID_PROFILE_FAIL:
      return {
        ...initialState,
        loading: false,
        success: false,
        error: action.payload,
      };
    case GETBYID_PROFILE_RESET:
    case LOGIN_RESET:
      return { ...initialState };

    default:
      return state;
  }
};