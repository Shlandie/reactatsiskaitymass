import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("Koko");
    const [isPending, setIsPending] = useState(false);
    // const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, content, author };

        setIsPending(true);

        setTimeout(() => {
            fetch("http://localhost:8000/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                setTitle("");
                setAuthor("");
                setContent("");
                setIsPending(false);
                // setSuccess(true);

                // setTimeout(() => {
                //     setSuccess(false);
                navigate("/");
                // }, 100)
            })
        }, 1000)

    }


    return (



        <form className="formcontainer" onSubmit={handleSubmit}>
            <label className="formcontainer__title">Blog Title:</label>
            <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            >

            </input>

            <label className="formcontainer__content">Blog Content:</label>
            <textarea
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
            >

            </textarea>

            <label className="formcontainer__author">Author:</label>
            <select
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            >
                <option value="Koko">Koko</option>
                <option value="Okay">Okay</option>
            </select>

            {!isPending && <button>Submit</button>}
            {isPending && <button disabled> Submitting...</button>}
            {/* {success && <h2>SUCCESS! Redirecting...</h2>} */}
        </form >

    );
}

export default Create;