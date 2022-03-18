import React, { useState } from "react";

import NewItem from "./components/NewItem/NewItem";
import Items from "./components/Items/Items";
import Wrapper from "./components/Helpers/Wrapper";

const dumyList = [
  {
    id: "1",
    title: "New Side Project",
    duration: 4,
    date: new Date(2022, 7, 14),
  },
  { id: "2", title: "Ski Holiday ", duration: 7, date: new Date(2021, 2, 12) },
  {
    id: "3",
    title: "Home Renovation",
    duration: 7,
    date: new Date(2022, 0, 28),
  },
  {
    id: "4",
    title: "Family Visit",
    duration: 2,
    date: new Date(2022, 1, 12),
  },
];

const App = () => {
  const [toDoList, setToDoList] = useState(dumyList);

  const addItemsHandler = (newItem) => {
    setToDoList((prevItems) => {
      return [newItem, ...prevItems];
    });
  };

  return (
    <Wrapper>
      <NewItem onAddItem={addItemsHandler} />
      <Items itemsList={toDoList} />
    </Wrapper>
  );
};

export default App;
