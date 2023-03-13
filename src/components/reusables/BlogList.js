import React from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {

    const blogs = props.blogs;

    return (
        <div>
            {
                blogs.map((blog) => (
                    <Link key={blog.id} className="container__link" to={`/blog/${blog.id}`}>
                        <div className="container">
                            <h2>{blog.title}</h2>
                            <h4 className="container__author">By {blog.author}</h4>
                        </div>
                    </Link>
                ))}
        </div>

    );
}

export default BlogList;