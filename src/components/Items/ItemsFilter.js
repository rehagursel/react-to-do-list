import React from "react";

import "./ItemsFilter.css";

const ItemsFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilterMounth(event.target.value);
  };

  return (
    <div className="items-filter">
      <div className="items-filter__control">
        <label>Filter by mounth</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="All">All</option>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
        </select>
      </div>
    </div>
  );
};

export default ItemsFilter;
