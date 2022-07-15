import styled from "styled-components";
import "./App.css";
import { Header } from "./stories/Header";

import { FormData } from "./config/FormConfig";
import { FormBuilder } from "./containers/FormBuilder";

const AppWrapper = styled.div`
  display: grid;
`;

function App() {
  const headerData = {
    user: {
      name: "Setu Careers",
    },
  };
  return (
    <div className="App">
      <Header {...headerData} />
      <AppWrapper>{<FormBuilder data={FormData} />}</AppWrapper>
    </div>
  );
}

export default App;
