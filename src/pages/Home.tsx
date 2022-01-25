import React, { FC } from "react";
import { useAppContext } from "../context/AppContext";
// app context value interface
import AppContextValue from "../types/appContextValue";

const HomePage: FC = () => {
  const { hello, sellId, state }: AppContextValue = useAppContext();

  return (
    <div>
      <h2>Home page</h2>
      <p>
        My context property: {hello}, my sell Id: {sellId}
      </p>
      <p>
        My name is: {state?.name}, my age: {state?.age}, isWorking now:{" "}
        {state?.isWorking.toString()}
      </p>
    </div>
  );
};

export default HomePage;
