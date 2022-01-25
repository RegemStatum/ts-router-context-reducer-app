import {
  AppReducerActionType as ActionType,
  AppReducerStateType as StateType,
  AppReducerActions as Actions,
} from "../types/appReducer";

const reducer = (state: StateType, action: ActionType) => {
  if (action.type === Actions.TEST) {
    return {
      ...state,
      name: action.payload.newName,
      isWorking: !state.isWorking,
    };
  }
  return { ...state };
};

export default reducer;
