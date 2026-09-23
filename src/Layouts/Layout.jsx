import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="page-shell">
      <Outlet />
    </main>
  );
}

export default Layout;
