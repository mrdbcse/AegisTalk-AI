import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../../constants/navRoutes";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white">
      <div
        className="h-16 flex items-center px-6 text-xl font-semibold border-b border-gray-800 cursor-pointer"
        onClick={() => navigate("/")}
      >
        AegisTalk AI
      </div>
      <nav className="p-4 space-y-2">
        {routes.map(({ label, to }, i) => (
          <NavLink
            key={i}
            to={to}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md text-sm cursor-pointer ${
                isActive ? "bg-gray-800" : "hover:bg-gray-800"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
