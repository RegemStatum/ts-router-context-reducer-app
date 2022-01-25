import React, { FC, useContext, useEffect, useReducer } from "react";

// context value interface
import ValueInterface from "../types/appContextValue";

// reducer
import reducer from "../reducers/appReducer";

// reducer types
import {
  AppReducerActionType as ActionType,
  AppReducerStateType as StateType,
  AppReducerActions as Actions,
} from "../types/appReducer";

// create context
const defaultValue = {};
const AppContext = React.createContext(defaultValue);

const initialState: StateType = {
  name: "Aleksandr",
  age: 18,
  isWorking: true,
};

export const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<StateType, ActionType>>(
    reducer,
    initialState
  );

  const value: ValueInterface = {
    hello: "hello world!",
    sellId: 23,
    state,
  };

  // useEffect(() => {
  //   dispatch({ type: Actions.TEST, payload: { newName: "Vasiliy" } });
  // }, []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// custom useAppContext hook
export const useAppContext = () => {
  return useContext(AppContext);
};
