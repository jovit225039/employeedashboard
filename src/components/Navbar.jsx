import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark dashboard-navbar">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Employee Dashboard
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <div className="navbar-nav ms-auto">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? "active fw-semibold" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/employee"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active fw-semibold" : ""}`
              }
            >
              Employee Form
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;