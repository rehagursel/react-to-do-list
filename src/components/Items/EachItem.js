import React from "react";

import ItemDate from "./ItemDate";
import Card from "../UI/Card";
import "./EachItem.css";

const EachItem = (props) => {
  /*   const [newTitle, setTitle] = useState(props.title); 

  const clickHandler = () => {
    setTitle("Changed !!!");   //I will add change button later
  }; */

  return (
    <li>
      <div className="item">
        <ItemDate date={props.date} />
        <div className="item__description">
          <h2>{props.title}</h2>
          <div className="item__duration">
            {props.duration} {props.duration > 1 ? "Days" : "Day"}
          </div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </div>
    </li>
  );
};

export default EachItem;
