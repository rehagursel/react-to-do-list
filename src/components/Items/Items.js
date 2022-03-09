import React, { useState } from "react";

import "./Items.css";
import ItemsList from "./ItemsList";
import ItemsFilter from "./ItemsFilter";
import Card from "../UI/Card";

const Items = (props) => {
  const [filterMounth, setFilterMounth] = useState("All");

  const filterMounthChangeHandler = (selectedMounth) => {
    setFilterMounth(selectedMounth);
  };

  const filteredItems = props.itemsList.filter((each) => {
    if (filterMounth !== "All") {
      return (
        each.date.toLocaleString("en-US", { month: "short" }) === filterMounth
      );
    } else {
      return each;
    }
  });

  return (
    <div>
      <Card className="items">
        <ItemsFilter
          selected={filterMounth}
          onChangeFilterMounth={filterMounthChangeHandler}
        />
        <ItemsList itemsRendering={filteredItems} />
      </Card>
    </div>
  );
};

export default Items;
