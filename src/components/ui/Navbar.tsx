import { Link, NavLink } from "react-router-dom";
import Container from "../ui/Container";

function Navbar() {
  function getListStyle() {
    return "hover:text-gray-0 hover:border-b-2 hover:border-gray-0 border-b-2 border-transparent transition-all pb-1";
  }

  function getActiveStyle() {
    return "text-gray-0 border-b-2 border-gray-0 pb-1";
  }

  return (
    <Container className="flex justify-between">
      <Link to="/">Holy Word</Link>
      <nav>
        <ul className="flex gap-3">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? getActiveStyle() : getListStyle()
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? getActiveStyle() : getListStyle()
              }
              to="/quotes"
            >
              Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? getActiveStyle() : getListStyle()
              }
              to="/api-docs"
            >
              Use API
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Navbar;
