import { useState } from "react";
import { useEffect } from "react";
import useFetch from "../customHooks/useFetch.js";
import BlogList from "./reusables/BlogList";

function Home() {



    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");


    // const handleDelete = (id) => {
    //     const filteredBlogs = blogs.filter((id) => blogs.id !== id);
    //     blogs = filteredBlogs;
    // }

    return (
        <>

            <div className="home">
                <h2 className="home__h">
                    Main Homepage
                </h2>


                {blogs && <BlogList blogs={blogs} />}


                {isPending && <h3>Loading...</h3>}
                {error && <h3>{error}</h3>}

            </div>
        </>
    );
}

export default Home;