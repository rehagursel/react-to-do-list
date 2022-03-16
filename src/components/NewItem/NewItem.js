import React, { useState } from "react";

import "./NewItem.css";
import ItemForm from "./ItemForm";
import Card from "../UI/Card";

const NewItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveItemDataHandler = (enteredItemData) => {
    const itemData = {
      id: Math.random().toString(),
      ...enteredItemData,
    };
    props.onAddItem(itemData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <Card className="new-item">
      {!isEditing && (
        <div>
          <h2>To Do List</h2>
          <button onClick={startEditingHandler}>Add New Task</button>
        </div>
      )}
      {isEditing && (
        <ItemForm
          onSaveItemData={saveItemDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </Card>
  );
};

export default NewItem;
