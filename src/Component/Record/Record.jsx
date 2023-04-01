import React from "react";
import "./Record.css";
import { addToDb, getShoppingCart } from "../../Fake/fakedb";
import Bookmark from "../Bookmark/Bookmark";

const Record = (props) => {

  let time = 0;
  for (const times of props.item) {
    time = time + times.Read_time;
  }

  return (
    <div className="m-5">
      <div className="RecordBox">
        <h1 className="text-xl font-bold">Spent time on read : {time} min</h1>
      </div>
      {/* <Bookmark mark={props.mark}></Bookmark> */}
      <Bookmark></Bookmark>
    </div>
  );
};

export default Record;









{/* {props.mark.map((text) =>
            text.Mark ? (
              <div className="mt-4">
                <div className="p-5 bg-white border mx-6 my-4 font-bold">
                  <p>{text.Blog_title}</p>
                </div>
              </div>
            ) : (
              console.log("go away!!")
            )
          )} */}