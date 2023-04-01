import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "./Blogs.css";
import Record from "../Record/Record";
import { toast } from "react-toastify";

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
    let newMark = [];
    const check = mark.find((pd) => pd.id === marks.id);
    if (check) {
      toast.warn("This blog post is already bookmarked!");
    } else {
      toast.success("Blog post bookmarked successfully!");
    }
    newMark = [...mark, marks];
    setMark(newMark);
  };
  return (
    <div className="blogs container mx-auto mt-10 grid sm:grid-cols-1 md:grid-cols-2">
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
      <div className="box">
        <Record item={items} mark={mark}></Record>
      </div>
    </div>
  );
};

export default Blogs;
