import { Link } from "react-router-dom";

import "./style.scss";
import { FiShoppingCart } from "react-icons/fi";

export const Navbar = () => {
    return (
        <div className="container-navbar">
            <nav className="nav-container">
                <Link to="/">
                    <a href="/#">
                        <img
                            src="https://logodownload.org/wp-content/uploads/2019/04/google-play-games-0-768x768.png"
                            alt="logo"
                        />
                    </a>
                </Link>
                <ul className="nav-list">
                    <li>
                        <Link to="/ShoppingCart">
                            <a href="/#">My Games</a>
                        </Link>
                    </li>
                    <li>
                            <a href="/#">Top charts</a>

                    </li>
                    <li>

                            <a href="/#">Releases</a>

                    </li>
                    <li>
                        <a href="/#">Categories</a>
                    </li>
                </ul>
            </nav>
            <div className="container-user">
                <Link to="/ShoppingCart">
                    <i>
                        <FiShoppingCart color="#000000" size="30px" />
                    </i>
                </Link>
                <img
                    src="https://lh3.googleusercontent.com/ogw/ADea4I72_GoPRRdfnFXnugLFYe2ICIlSSjn3iVVIQKrF=s83-c-mo"
                    alt="logo"
                />
            </div>
        </div>
    );
};
