import { AppReducerStateType } from "./appReducer";

export default interface AppContextValue {
  hello?: string;
  sellId?: number;
  state?: AppReducerStateType;
}
