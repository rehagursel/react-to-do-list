import React from "react";

import EachItem from "./EachItem";
import "./ItemsList.css";

const ItemsList = (props) => {
  if (props.itemsRendering.length === 0) {
    return <h2 className="items-list__fallback">Found no item</h2>;
  }
  return (
    <ul className="items-list">
      {props.itemsRendering.map((item) => (
        <EachItem
          key={item.id}
          title={item.title}
          duration={item.duration}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
