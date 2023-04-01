import React from "react";
import "./Record.css";
import Bookmark from "../Bookmark/Bookmark";

const Record = (props) => {
  let time = 0;
  for (const times of props.item) {
    time = time + times.Read_time;
  }

  return (
    <>
      <div className="m-5">
        <div className="RecordBox">
          <h1 className="text-xl font-bold">Spent time on read : {time} min</h1>
        </div>
        <Bookmark mark={props.mark}></Bookmark>
      </div>
    </>
  );
};

export default Record;
