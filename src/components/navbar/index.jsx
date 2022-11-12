import './index.css';
import SmitLogo from '../../assets/smit-logo.png';
import { Link } from "react-router-dom";

// import { BrowserRouter } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav className="menu-container">
                {/* burger menu */}
                <input type="checkbox" aria-label="Toggle menu" />
                <span></span>
                <span></span>
                <span></span>

                {/* logo */}
                <a href="#" className="menu-logo">
                    <img src={SmitLogo} alt="logo" />
                </a>

                {/* menu items  */}
                <div className="menu">
                    <ul>
                    </ul>
                    <ul>
                        <li>
                            <Link to={"/dashboard"}>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to={"/classAdding"}>
                                Class
                            </Link>
                        </li>
                        <li>
                            <Link to={"/attendance"}>
                                Attendance
                            </Link>
                        </li>
                        <li>
                            <Link to={"/about"}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
