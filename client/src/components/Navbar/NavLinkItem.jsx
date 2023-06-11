import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavLinkItem = ({ to, icon }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-2xl text-orange-500" : "text-2xl text-gray-400"
      }
    >
      <FontAwesomeIcon icon={icon} />
    </NavLink>
  );
};

export default NavLinkItem;
