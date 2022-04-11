import { useState } from "react";

function Header() {
  let [inputCheck, setInputCheck] = useState(false);

  const handleClick = () => {
    console.log("click");
    setInputCheck(inputCheck ? false : true);
  };
  const handleChange = () => {
    console.log("Chnage");
  };
  return (
    <header>
      <p>&lt;SR /&gt;</p>
      <input
        type="checkbox"
        id="humburgur"
        checked={inputCheck}
        onClick={handleClick}
        onChange={handleChange}
      />
      <nav className="nav">
        <label htmlFor="humburgur">
          <i className="fas fa-times"></i>
        </label>
        <a href="#Home">
          <button className="linkBtn" onClick={handleClick}>
            Home
          </button>
        </a>
        <a href="#About">
          <button className="linkBtn" onClick={handleClick}>
            About
          </button>
        </a>
        <a href="#Skills">
          <button className="linkBtn" onClick={handleClick}>
            Skills
          </button>
        </a>
        <a href="#Projects">
          <button className="linkBtn" onClick={handleClick}>
            Projects
          </button>
        </a>
        <a href="#footer">
          <button className="linkBtn" onClick={handleClick}>
            Connect
          </button>
        </a>
        {/* <Router>
                <Link  to='/#footer'>Connect</Link >
                </Router> */}
      </nav>
      <div className="overlay"></div>
    </header>
  );
}

export default Header;
