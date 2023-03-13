import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="navbar">
                <h1 className="navbar__h">Doggo Bloggo</h1>

                <ul className="navbar__ul">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/create"><li>Create Blog</li></Link>
                    <Link to="/about"><li>About</li></Link>
                </ul>
            </div>
        </>
    );
}

export default Navbar;