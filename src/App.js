//import React from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";
import { useState } from "react";

const initialCosts = [
  {
    id: "c1",
    date: new Date(2020, 2, 12),
    description: "Fridge",
    price: 999.99
  },
  {
    id: "c2",
    date: new Date(2022, 11, 25),
    description: "MacBook",
    price: 1200
  },
  {
    id: "c3",
    date: new Date(2022, 4, 1),
    description: "Jins",
    price: 30
  },
];

const App = () => {
  const [costs, setCosts] = useState(initialCosts);
  

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Starting with react!"),
  //   React.createElement(Costs, {costs: costs})
  // );

  const addCostHandler = cost => {
    setCosts(previousCosts => {
      return [cost, ...previousCosts]
    });
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
