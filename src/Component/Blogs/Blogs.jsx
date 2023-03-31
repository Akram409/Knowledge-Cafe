import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Blogs.css'
import Record from '../Record/Record';

const Blogs = () => {
    const [blogs,setBlogs] = useState([])
    const [items,setItems] = useState([])

    // useEffect(() =>{

    // },[])
    useEffect(() => {
        const loadData = async() => {
            const res = await fetch('Blog.json')
            const data = await res.json()
            setBlogs(data)
        }
        loadData()
    },[])

    const MarkRead = (item) =>{
        const newItem = [...items,item]
        // console.log(newItem)
        setItems(newItem)
      }
    return (
        <div className='blogs container mx-auto mt-10'>
            <div>
                {
                    blogs.map(blog => <Cards 
                        blog={blog}
                        key={blog.id}
                        MarkRead={MarkRead}
                        ></Cards>)
                }
            </div>
            <div className='border border-red-600'>
                <Record item={items}></Record>

            </div>
        </div>
    );
};

export default Blogs;