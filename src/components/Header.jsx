import { Link } from "react-router-dom";
import "../styles/header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480); // Consistent width check
    };

    handleResize(); // Run on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up listener
    };
  }, []);

  return (
    <header>
      <div className="my-logo">
        <h1>
          Ar<span>4</span>sCode
        </h1>
      </div>
      <nav>
        {isMobile ? (
          <>
            <button
              className="menu-btn"
              onClick={() => setIsNavOpen(!isNavOpen)} // Toggle menu visibility
            >
              ☰
            </button>
            {isNavOpen && (
              <ul className="vertical-navbar">
                <li>
                  <Link className="nav-links" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-links" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="nav-links" to="/resumes">
                    Resumes
                  </Link>
                </li>
                <li>
                  <Link className="nav-links" to="/skills">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link className="nav-links" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </>
        ) : (
          <ul className="horizontal-navbar">
            <li>
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/resumes">
                Resumes
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
