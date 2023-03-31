import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Blogs.css'

const Blogs = () => {
    const [blogs,setBlogs] = useState([])

    useEffect(() => {
        const loadData = async() => {
            const res = await fetch('Blog.json')
            const data = await res.json()
            setBlogs(data)
        }
        loadData()
    },[])

    // console.log(blogs)
    return (
        <div className='blogs container mx-auto mt-10'>
            <div>
                {
                    blogs.map(blog => <Cards blog={blog}></Cards>)
                }
            </div>
            <div>
                <h1>okkkkk</h1>
            </div>
        </div>
    );
};

export default Blogs;