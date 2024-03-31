import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const NavMiddle = ({ routes, open }) => {
  return (
    <ul
      className={`md:flex w-[180px] md:w-auto
      ${open ? "left-6" : "-left-52"} 
      duration-500 md:font-medium absolute md:static 
      top-20 bg-slate-600 p-4 rounded-md md:rounded-none 
      md:left-0 md:bg-transparent md:p-0`}
    >
      {routes.map((route, id) => {
        return (
          <NavLink
            key={id}
            className={
              "md:mr-6 hover:bg-slate-500 px-3 py-1 rounded-sm text-base font-bold"
            }
            to={route.path}
          >
            {route.name}
          </NavLink>
        );
      })}
    </ul>
  );
};

NavMiddle.propTypes = {
  routes: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
};

export default NavMiddle;
