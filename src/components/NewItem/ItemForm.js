import React, { useState } from "react";

import "./ItemForm.css";

const ItemForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDuration, setEnteredDuration] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const durationChangeHandler = (event) => {
    setEnteredDuration(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const itemData = {
      title: enteredTitle,
      duration: +enteredDuration,
      date: new Date(enteredDate),
    };

    props.onSaveItemData(itemData);

    setEnteredTitle("");
    setEnteredDuration("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-item__controls">
        <div className="new-item__control">
          <label>Title</label>
          <input
            required
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-item__control">
          <label>Duration (day)</label>
          <input
            required
            type="number"
            min="0.5"
            step="0.5"
            value={enteredDuration}
            onChange={durationChangeHandler}
          />
        </div>
        <div className="new-item__control">
          <label>Date</label>
          <input
            required
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-item__actions">
        <button type="submit">Add</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ItemForm;
