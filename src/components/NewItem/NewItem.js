import React, { useState } from "react";

import "./NewItem.css";
import ItemForm from "./ItemForm";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const NewItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState();

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveItemDataHandler = (enteredItemData) => {
    if (
      enteredItemData.title.trim().length === 0 ||
      enteredItemData.duration === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid Title and Duration",
      });
      return;
    }

    if (enteredItemData.duration < 0.5) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid Duration (min 0.5)",
      });
      return;
    }

    const itemData = {
      id: Math.random().toString(),
      ...enteredItemData,
    };
    props.onAddItem(itemData);
  };

  const errorHandler = () => {    //add modal off className
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          className={error}
          title={error.title}
          message={error.message}
          onCancel={errorHandler}
        />
      )}
      <Card className="new-item">
        {!isEditing && (
          <div>
            <h2>To Do List</h2>
            <Button onClick={startEditingHandler}>Add New Task</Button>
          </div>
        )}
        {isEditing && (
          <ItemForm
            onSaveItemData={saveItemDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </Card>
    </Wrapper>
  );
};

export default NewItem;
