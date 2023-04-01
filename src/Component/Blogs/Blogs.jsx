import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "./Blogs.css";
import Record from "../Record/Record";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [items, setItems] = useState([]);
  const [mark, setMark] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("Blog.json");
      const data = await res.json();
      setBlogs(data);
    };
    loadData();
  }, []);

  const MarkRead = (item) => {
    let newItem = [];
    newItem = [...items, item];
    setItems(newItem);
  };

  const BookMark = (marks) => {
    const { id } = marks;
    // console.log(marks.id)
    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    let bookmark = [];
    const Marks = { id, Mark: true };
    if (previousBookmark) {
      const isThisProductMarked = previousBookmark.find(
        (pd) => pd.id == marks.id
      );
      if (isThisProductMarked) {
        console.log("No do that!!");
      } else {
        bookmark.push(...previousBookmark, Marks);
        localStorage.setItem("bookmark", JSON.stringify(bookmark));
      }
    } else {
      bookmark.push(Marks);
      localStorage.setItem("bookmark", JSON.stringify(bookmark));
    }
    // let newMark = [];
    // newMark = [...mark, marks];
    // setMark(newMark);
  };
  return (
    <div className="blogs container mx-auto mt-10">
      <div>
        {blogs.map((blog) => (
          <Cards
            blog={blog}
            key={blog.id}
            MarkRead={MarkRead}
            BookMark={BookMark}
          ></Cards>
        ))}
      </div>
      <div className="border border-red-600">
        {/* <Record item={items} mark={mark}></Record> */}
        <Record item={items}></Record>
      </div>
    </div>
  );
};

export default Blogs;
