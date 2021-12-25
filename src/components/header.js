import { useEffect } from "react";

function Header() {
    return (
        <header>
            <p>&lt;SR /&gt;</p>
            <input type="checkbox" id="humburgur"/>
            <nav className="nav">
                <label htmlFor="humburgur"><i className="fas fa-times"></i></label>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Connect</a>
            </nav>
            <div className="overlay"></div>
        </header>
    );
}

export default Header;