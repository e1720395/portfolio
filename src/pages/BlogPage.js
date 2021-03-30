import React from 'react';
import Tittle from '../components/Title';
import allBlogs from '../components/allBlogs'

export default function BlogPage() {
    return(
        <div className="1">
            <div className="b-title">
                <Tittle title={'Événements'} span={'Événements'} />
            </div>
            <div className="BlogPage">
                {
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alr="" />
                                <a href={blog.link} className="blog-link">
                                    {blog.title}
                                </a>
                                <div>
                                    <p>{blog.date}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>


        </div>
    )
}
