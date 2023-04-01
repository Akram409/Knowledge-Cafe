import React from "react";

const Bookmark = ({ mark }) => {
  return (
    <div>
      <div className="RecordBookMark border border-blue-600 p-8 mt-6">
        <p className="text-xl font-bold text-black">
          Bookmarked Blogs : {mark.length}
        </p>
      </div>
      <div className="mt-4">
        {mark.map((text) => (
          <div className="p-5 bg-white border mx-6 my-4 font-bold">
            {<p className="font-bold text-lg">{text.Blog_title}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Bookmark;
