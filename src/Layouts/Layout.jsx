import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className="page-shell" data-theme={theme}>
      <Outlet />
    </main>
  );
}

export default Layout;
