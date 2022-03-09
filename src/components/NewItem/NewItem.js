import React, { useState } from "react";

import "./NewItem.css";
import ItemForm from "./ItemForm";

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
    <div className="new-item">
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
    </div>
  );
};

export default NewItem;
