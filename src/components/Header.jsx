import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const navItems = ["Home", "Categories", "About", "Contact"];

  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-8">
      {/* Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-primary hover:text-secondary transition-colors"
        >
          QuotesHub
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navItems.map((label) => {
            const path = label === "Home" ? "/" : `/${label.toLowerCase()}`;
            return (
              <li key={label}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `font-medium transition-colors ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-base-content/80 hover:text-primary"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden dropdown dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle"
          aria-label="Open navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {navItems.map((label) => {
            const path = label === "Home" ? "/" : `/${label.toLowerCase()}`;
            return (
              <li key={label}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `font-medium transition-colors ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-base-content/80 hover:text-primary"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}