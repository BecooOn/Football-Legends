import React, { useState } from "react";
import Header from "./components/Header";
import { data } from "./helpers/data";
import CardContainer from "./components/CardContainer";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Header data={data} search={search} setSearch={setSearch} />
      <CardContainer data={data} search={search} />
    </div>
  );
};

export default App;
