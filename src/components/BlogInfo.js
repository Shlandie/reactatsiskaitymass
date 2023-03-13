import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import useFetch from "../customHooks/useFetch";

const BlogInfo = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const { data: blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id);

    const handleDelete = (e) => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        }).then(() => {
            navigate("/");
        })
    }

    return (
        <>
            {isPending && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            {blog && (
                <>
                    <div className="infocontainer">
                        <h2 className="infocontainer__title">{blog.title}</h2>
                        <p className="infocontainer__content">{blog.content}</p>
                        <h5 className="infocontainer__author">{blog.author}</h5>
                        <button onClick={(e) => handleDelete(e)}>Delete</button>
                    </div>
                </>
            )}
        </>
    );

}

export default BlogInfo;