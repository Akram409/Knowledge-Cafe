import React from "react";
import "./Record.css";

const Record = (props) => {
  let time = 0;
  let total = 0;
  for (const times of props.item) {
    time = time + times.Read_time;
    total = total + 1;
  }

  return (
    <div className="m-5">
      <div className="RecordBox">
        <h1 className="text-xl font-bold">Spent time on read : {time} min</h1>
      </div>
      <div className="RecordBookMark border border-blue-600 p-8 mt-6">
        <p className="text-xl font-bold text-black">
          Bookmarked Blogs : {total}
        </p>
        {/* <div className="mt-4">
            {props.item.map((text) => <div className="p-5 bg-white border mx-6 my-4 font-bold">
              <p>{text.Blog_title}</p>
            </div>)}
        </div> */}
      </div>
    </div>
  );
};

export default Record;
