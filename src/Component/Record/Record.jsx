import React from "react";
import './Record.css'
const Record = ({item}) => {
    // console.log(props.item)
    let time = 0 ;
    // for(const times of item)
    // {
    //     time = time + times
    // }
  return (
    <div className="m-5">
      <div className="RecordBox">
        <h1 className="text-xl font-bold">Spent time on read : {time} min</h1>
      </div>
      <div className="RecordBookMark border border-blue-600 p-8 mt-6">
        <p className="text-xl font-bold text-black">Bookmarked Blogs : </p>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Record;
