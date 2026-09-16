import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <div>
      <header className="header">
        <div className="brand-wrap">
          <h1>
            <span className="brand-mark">Your Personal NoteApp</span>
          </h1>
        </div>

        <nav className="main-nav">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About & Contact us
          </NavLink>
        </nav>
      </header>

      <main className="page-shell">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
