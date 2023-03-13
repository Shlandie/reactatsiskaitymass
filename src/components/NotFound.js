import react from "react";
import { Link } from "react-router-dom"

const NotFound = () => {

    return (
        <>
            <h2>PAGE NOT FOUND!</h2>
            <Link to="/">Back to Homepage</Link>
        </>
    )
}

export default NotFound;