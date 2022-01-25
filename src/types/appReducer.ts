export enum AppReducerActions {
  TEST = "TEST",
}

export interface AppReducerActionType {
  type: AppReducerActions;
  payload: { [key: string]: any };
}

export interface AppReducerStateType {
  name: string;
  age: number;
  isWorking: boolean;
}
