import React, { useState } from "react";
import Form from "./components/Form";
import Information from "./components/Information";
import IdNo from "./components/IdNo";
import FlexContainer from "./container/FlexContainer";
import Employees from "./components/Employees";
import { Data } from "./data/Data";
const App = () => {
  const [data, setData] = useState(Data);

  return (
    <div className="p-2 ">
      <FlexContainer>
        <IdNo />
        <Information />
      </FlexContainer>
      <FlexContainer>
        <Form data={data} setData={setData} />
        <Employees data={data} />
      </FlexContainer>
    </div>
  );
};

export default App;
