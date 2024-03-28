import { NavLink } from "react-router-dom";



const Navbar = () => {
    return <>
        <div className="menu_icons">
            <ul className="nav_list">
                <li>
                    <NavLink to="/"> HomePage </NavLink>
                </li>
                <li>
                    <NavLink to="/about"> AboutPage </NavLink>
                </li>
                <li>
                    <NavLink to="/contact"> ContactPage </NavLink>
                </li>
                <li>
                    <NavLink to="/servicepage/:id"> ServicePage </NavLink>
                </li>
                <li>
                    <NavLink to="*"> ErrorPage </NavLink>
                </li>
                <li>
                    <NavLink to="/appname"> AppName </NavLink>
                </li>
            </ul>
        </div>
    </>
}

export default Navbar