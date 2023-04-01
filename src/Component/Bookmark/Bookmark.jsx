import React from "react";

const checkBookmark = (id) => {
  const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));

  const isBookmarked = previousBookmark?.find((product) => product.id == id);
  if (isBookmarked) {
    return true;
  } else {
    return false;
  }
};

const getBookmarkCart = () => {
  let BookmarkCart = {};

  const storedCart = localStorage.getItem('bookmark');
  if (storedCart) {
    BookmarkCart = JSON.parse(storedCart);
  }
  return BookmarkCart;
}

const Bookmark = () => {
  const BookmarkList = getBookmarkCart()
  console.log(BookmarkList)
  return (
    <div>
      {
        
      }
      {/* <div className="RecordBookMark border border-blue-600 p-8 mt-6">
        <p className="text-xl font-bold text-black">
          Bookmarked Blogs : 
        </p>
      </div> */}
    </div>
  );
};

{
  /* <div className="mt-4">
                <div className="p-5 bg-white border mx-6 my-4 font-bold">
                  <p>{text.Blog_title}</p>
                </div>
              </div> */
}
export default Bookmark;
